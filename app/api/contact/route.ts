import { NextResponse } from "next/server";

const DESTINATION = "habitatasistencial@gmail.com";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
};

async function readPayload(request: Request): Promise<ContactPayload> {
  const contentType = request.headers.get("content-type") || "";

  if (contentType.includes("application/json")) {
    return (await request.json()) as ContactPayload;
  }

  if (
    contentType.includes("application/x-www-form-urlencoded") ||
    contentType.includes("multipart/form-data")
  ) {
    const form = await request.formData();
    return {
      name: String(form.get("name") || ""),
      email: String(form.get("email") || ""),
      phone: String(form.get("phone") || ""),
      service: String(form.get("service") || ""),
      message: String(form.get("message") || ""),
    };
  }

  // Fallback: intentar JSON; si falla, formData
  try {
    return (await request.json()) as ContactPayload;
  } catch {
    const form = await request.formData();
    return {
      name: String(form.get("name") || ""),
      email: String(form.get("email") || ""),
      phone: String(form.get("phone") || ""),
      service: String(form.get("service") || ""),
      message: String(form.get("message") || ""),
    };
  }
}

export async function POST(request: Request) {
  try {
    const body = await readPayload(request);
    const name = (body.name || "").trim();
    const email = (body.email || "").trim();
    const phone = (body.phone || "").trim();
    const service = (body.service || "").trim();
    const message = (body.message || "").trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Faltan nombre, email o mensaje." },
        { status: 400 }
      );
    }

    console.log("Nuevo contacto Hábitat Asistencial", {
      name,
      email,
      phone,
      service,
      message,
      at: new Date().toISOString(),
    });

    // Entrega por FormSubmit (sin API key; primer envío puede pedir confirmar el Gmail)
    const forward = await fetch(
      `https://formsubmit.co/ajax/${DESTINATION}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          service,
          message,
          _subject: `[Hábitat Asistencial] Contacto web — ${service || "Consulta"}`,
          _template: "table",
          _replyto: email,
        }),
      }
    );

    if (!forward.ok) {
      const detail = await forward.text().catch(() => "");
      console.error("FormSubmit error", forward.status, detail);
      // Seguimos respondiendo éxito de recepción en servidor (queda en logs),
      // pero avisamos que el correo puede no haberse enviado.
      return NextResponse.json(
        {
          success: true,
          delivered: false,
          message:
            "Hemos recibido tu mensaje. Si no te contactamos pronto, escríbenos por WhatsApp al 635 332 019.",
        },
        { status: 200 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        delivered: true,
        message: "Mensaje enviado correctamente. Te responderemos pronto.",
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("Contact API error", err);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
