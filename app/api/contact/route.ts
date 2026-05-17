import { NextResponse } from "next/server";
export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log("Nuevo contacto desde Hábitat Asistencial", body);
    return NextResponse.json({ success: true, message: "Mensaje recibido correctamente" }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
  }
}
