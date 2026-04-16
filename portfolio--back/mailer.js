import nodemailer from "nodemailer";

export const sendContactEmail = async ({ name, email, message }) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // 📩 EMAIL ADMIN (toi)
  await transporter.sendMail({
  from: `"Portfolio Bot" <${process.env.EMAIL_USER}>`,
  to: process.env.TO_EMAIL,
  subject: `📩 Nouveau message - ${name}`,
  html: `
  <div style="
    font-family: Inter, Arial;
    background:#020617;
    padding:24px;
    border-radius:12px;
    color:#e2e8f0;
    border:1px solid #1e293b;
  ">
    <h2 style="color:#22D3EE;">Nouveau message portfolio</h2>

    <div style="margin-top:16px">
      <p><b>👤 Nom:</b> ${name}</p>
      <p><b>📧 Email:</b> ${email}</p>
    </div>

    <div style="margin-top:16px">
      <p><b>💬 Message:</b></p>
      <p style="
        background:#0f172a;
        padding:12px;
        border-radius:8px;
        border:1px solid #1e293b;
        white-space:pre-line;
      ">
        ${message}
      </p>
    </div>
  </div>
  `,
});

  // 🤖 AUTO REPLY USER
 await transporter.sendMail({
  from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
  to: email,
  replyTo: process.env.EMAIL_USER,
  subject: "Merci pour ton message 🙌",

  html: `
  <div style="
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial;
    background:#0b1220;
    padding:40px 0;
  ">
    <div style="
      max-width:600px;
      margin:auto;
      background:#0f172a;
      border:1px solid rgba(255,255,255,0.08);
      border-radius:16px;
      padding:32px;
      color:#e2e8f0;
    ">

      <h2 style="
        margin:0 0 12px;
        font-size:22px;
        color:#60a5fa;
      ">
        Bonjour ${name} 👋
      </h2>

      <p style="font-size:15px; line-height:1.6; color:#cbd5e1;">
        Merci pour ton message, j’ai bien reçu ta demande.
      </p>

      <p style="font-size:15px; line-height:1.6; color:#cbd5e1;">
        Je te répondrai dans les plus brefs délais 🚀
      </p>

      <div style="
        margin-top:24px;
        padding-top:16px;
        border-top:1px solid rgba(255,255,255,0.08);
        font-size:13px;
        color:#94a3b8;
      ">
        — Portfolio • Réponse automatique
      </div>

    </div>
  </div>
  `,
});
};