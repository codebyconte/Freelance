import { Resend } from "resend";
import { EmailTemplate } from "@/components/resend/email-templates";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, message } = body;
    const { data, error } = await resend.emails.send({
      from: "Site Web <onboarding@resend.dev>",
      to: ["mr.conte@icloud.com"],
      subject: "📨 Nouveau message de contact",
      react: EmailTemplate({ firstName, lastName, email, phone, message }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ data, status: "ok" });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
