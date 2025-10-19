import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

const schema = z.object({ name: z.string().min(2), email: z.string().email(), message: z.string().min(5), honeypot: z.string().optional() });

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const parsed = schema.parse(data);
    if (parsed.honeypot) return NextResponse.json({ ok: true });

    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const CONTACT_TO = process.env.CONTACT_TO || "leopoldo.oliveira@gmail.com";
    const SITE_NAME = process.env.SITE_NAME || "Oliveira Engenharia";
    const MAIL_DOMAIN = process.env.MAIL_DOMAIN || "oliveiraengseg.com.br";

    if (RESEND_API_KEY) {
      const resend = new Resend(RESEND_API_KEY);
      await resend.emails.send({
        from: `${SITE_NAME} <noreply@${MAIL_DOMAIN}>`,
        to: [CONTACT_TO],
        reply_to: parsed.email,
        subject: `Novo contato pelo site – ${parsed.name}`,
        text: `Nome: ${parsed.name}
Email: ${parsed.email}

Mensagem:
${parsed.message}`
      });
    } else {
      console.log("Contato (sem Resend):", parsed);
    }
    return NextResponse.json({ ok: true });
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: err.message }, { status: 400 });
  }
}
