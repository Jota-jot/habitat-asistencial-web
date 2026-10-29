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
  const contentType = (request.headers.get("content-type") || "").toLowerCase();

  // Primary path used by the website (fetch + JSON.stringify).
  if (contentType.includes("application/json")) {
    try {
      const data = (await request.json()) as ContactPayload;
      return {
        name: String(data.name || ""),
        email: String(data.email || ""),
        phone: String(data.phone || ""),
        service: String(data.service || ""),
        message: String(data.message || ""),
      };
    } catch {
      return {};
    }
  }

  // Form posts (urlencoded / multipart).
  if (
    contentType.includes("application/x-www-form-urlencoded") ||
    contentType.includes("multipart/form-data")
  ) {
    try {
      const form = await request.formData();
      return {
        name: String(form.get("name") || ""),
        email: String(form.get("email") || ""),
        phone: String(form.get("phone") || ""),
        service: String(form.get("service") || ""),
        message: String(form.get("message") || ""),
      };
    } catch {
      return {};
    }
  }

  // Content-Type missing or unusual: try JSON, then formData.
  try {
    const data = (await request.clone().json()) as ContactPayload;
    if (data && (data.name || data.message || data.email)) {
      return {
        name: String(data.name || ""),
        email: String(data.email || ""),
        phone: String(data.phone || ""),
        service: String(data.service || ""),
        message: String(data.message || ""),
      };
    }
  } catch {
    /* continue */
  }

  try {
    const form = await request.formData();
    return {
      name: String(form.get("name") || ""),
      email: String(form.get("email") || ""),
      phone: String(form.get("phone") || ""),
      service: String(form.get("service") || ""),
      message: String(form.get("message") || ""),
    };
  } catch {
    return {};
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

    // Email is optional: WhatsApp-first flow only requires name + message.
    if (!name || !message) {
      return NextResponse.json(
        { success: false, delivered: false, error: "Faltan nombre o mensaje." },
        { status: 400 }
      );
    }

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
      success?: boolean | string;
      message?: string;
    };

    const accepted =
      forward.ok &&
      (result.success === true || result.success === "true");

    if (!accepted) {
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
