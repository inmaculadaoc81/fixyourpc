import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import type { ContactFormData } from "@/types/contact";

function isValid(data: Partial<ContactFormData>): data is ContactFormData {
  return Boolean(
    data.name?.trim() &&
      data.phone?.trim() &&
      data.email?.trim() &&
      data.message?.trim() &&
      data.privacyAccepted,
  );
}

export async function POST(request: Request) {
  let body: Partial<ContactFormData>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Solicitud inválida." }, { status: 400 });
  }

  if (!isValid(body)) {
    return NextResponse.json(
      { error: "Faltan campos obligatorios o no se aceptó la política de privacidad." },
      { status: 400 },
    );
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS, CONTACT_EMAIL } = process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !CONTACT_EMAIL) {
    console.error(
      "Contact form: missing SMTP_HOST / SMTP_PORT / SMTP_USER / SMTP_PASS / CONTACT_EMAIL env vars.",
    );
    return NextResponse.json(
      { error: "El formulario no está configurado todavía. Contacta por teléfono o WhatsApp." },
      { status: 503 },
    );
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: SMTP_SECURE !== "false",
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const { name, phone, email, equipment, message } = body;

  try {
    await transporter.sendMail({
      from: `"${name}" <${SMTP_USER}>`,
      to: CONTACT_EMAIL,
      replyTo: email,
      subject: `Nueva consulta MSITech Servicio Técnico MSI - fixyourpc.es`,
      text: [
        `Nombre: ${name}`,
        `Teléfono: ${phone}`,
        `Email: ${email}`,
        `Equipo/producto: ${equipment || "-"}`,
        "",
        "¿Qué ha pasado?",
        message,
      ].join("\n"),
    });
  } catch (err) {
    console.error("Contact form send error:", err);
    return NextResponse.json(
      { error: "No se pudo enviar el mensaje. Inténtalo de nuevo o llámanos." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
