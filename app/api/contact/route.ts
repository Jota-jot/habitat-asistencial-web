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

  return {};
}

export async function POST(request: Request) {
  try {
    const body = await readPayload(request);
    const name = (body.name || "").trim();
    const email = (body.email || "").trim();
    const phone = (body.phone || "").trim();
    const service = (body.service || "").trim();
    const message = (body.message || "").trim();

    // Email is optional: WhatsApp-only enquiries must also be accepted.
    if (!name || !message) {
      return NextResponse.json(
        { success: false, delivered: false, error: "Faltan nombre o mensaje." },
        { status: 400 }
      );
    }

    // Do not write personal contact details or message contents to application logs.
    const forward = await fetch(`https://formsubmit.co/ajax/${DESTINATION}`, {
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
        ...(email ? { _replyto: email } : {}),
      }),
    });

    const result = (await forward.json().catch(() => ({}))) as {
      success?: boolean;
      message?: string;
    };

    if (!forward.ok || result.success !== true) {
      console.error("FormSubmit rejected contact", {
        status: forward.status,
        message: result.message || "No se confirmó la aceptación",
      });
      return NextResponse.json(
        {
          success: false,
          delivered: false,
          error:
            "No se ha podido confirmar el envío por email. Contacta por WhatsApp al +34 635 332 019.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      delivered: true,
      message: "El servicio de correo ha aceptado la solicitud.",
    });
  } catch (err) {
    console.error(
      "Contact API error",
      err instanceof Error ? err.message : "Unknown error"
    );
    return NextResponse.json(
      { success: false, delivered: false, error: "Error interno del servidor." },
      { status: 500 }
    );
  }
}
