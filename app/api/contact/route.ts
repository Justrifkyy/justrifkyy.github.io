import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { nama, email, pesan } = body;

    // Basic Validation
    if (!nama || !email || !pesan) {
      return NextResponse.json(
        { success: false, error: "Nama, email, dan pesan wajib diisi." },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Format email tidak valid." },
        { status: 400 }
      );
    }

    const gmailUser = process.env.GMAIL_USER || "rifky020504@gmail.com";
    const gmailPass = process.env.GMAIL_APP_PASSWORD || "mznpqnfshipniclb";

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailPass,
      },
    });

    const timestamp = new Date().toLocaleString("id-ID", {
      timeZone: "Asia/Makassar",
      dateStyle: "full",
      timeStyle: "medium",
    });

    // 1. Email to Muhammad Rifky (Portfolio Owner)
    const ownerMailOptions = {
      from: `"Portofolio Inbound" <${gmailUser}>`,
      to: gmailUser,
      replyTo: `"${nama}" <${email}>`,
      subject: `📬 [PORTOFOLIO] Pesan Baru dari ${nama}`,
      text: `Pesan Baru dari Portofolio!\n\nNama: ${nama}\nEmail: ${email}\nWaktu: ${timestamp} WITA\n\nPesan:\n${pesan}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #FFFDF5; margin: 0; padding: 24px; color: #0A0A0A; }
            .card { background-color: #FFFFFF; border: 4px solid #0A0A0A; box-shadow: 6px 6px 0 #0A0A0A; max-width: 600px; margin: 0 auto; overflow: hidden; }
            .header { background-color: #FFE14D; border-bottom: 4px solid #0A0A0A; padding: 20px 24px; }
            .header h1 { margin: 0; font-size: 20px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.5px; }
            .header .sub { font-size: 12px; font-weight: 700; margin-top: 4px; font-family: monospace; }
            .content { padding: 24px; }
            .field { margin-bottom: 18px; }
            .label { font-size: 11px; font-weight: 900; text-transform: uppercase; font-family: monospace; color: #555; margin-bottom: 4px; letter-spacing: 1px; }
            .value { font-size: 16px; font-weight: 700; color: #0A0A0A; }
            .message-box { background-color: #FFFDF5; border: 3px solid #0A0A0A; box-shadow: 4px 4px 0 #0A0A0A; padding: 18px; font-size: 15px; line-height: 1.6; white-space: pre-wrap; margin-top: 10px; }
            .footer { background-color: #0A0A0A; color: #FFFDF5; padding: 16px 24px; font-size: 12px; font-family: monospace; text-align: center; }
            .btn { display: inline-block; background-color: #4D7CFF; color: #FFFFFF !important; text-decoration: none; font-weight: 800; font-family: monospace; padding: 12px 20px; border: 3px solid #0A0A0A; box-shadow: 4px 4px 0 #0A0A0A; margin-top: 14px; text-transform: uppercase; font-size: 13px; }
          </style>
        </head>
        <body>
          <div class="card">
            <div class="header">
              <h1>📬 Pesan Baru dari Portofolio</h1>
              <div class="sub">WAKTU: ${timestamp} WITA</div>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">PENGIRIM</div>
                <div class="value">${nama}</div>
              </div>
              <div class="field">
                <div class="label">EMAIL</div>
                <div class="value"><a href="mailto:${email}" style="color: #4D7CFF; text-decoration: underline;">${email}</a></div>
              </div>
              <div class="field">
                <div class="label">ISI PESAN</div>
                <div class="message-box">${pesan}</div>
              </div>
              <div style="text-align: center; margin-top: 24px;">
                <a href="mailto:${email}?subject=Re:%20Pesan%20dari%20Portofolio%20Muhammad%20Rifky" class="btn">Balas Langsung ke ${nama} ↗</a>
              </div>
            </div>
            <div class="footer">
              SISTEM NOTIFIKASI PORTOFOLIO • MUHAMMAD RIFKY
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // 2. Email Auto-Reply to the Sender (Feedback confirmation)
    const autoReplyOptions = {
      from: `"Muhammad Rifky" <${gmailUser}>`,
      to: email,
      subject: `✨ Terima kasih telah menghubungi saya! — Muhammad Rifky`,
      text: `Halo ${nama}!\n\nTerima kasih sudah menghubungi saya melalui portofolio. Pesan Anda sudah saya terima dengan baik.\n\nSaya akan segera meninjau dan merespon pesan Anda (biasanya dalam 1x24 jam).\n\nRingkasan pesan Anda:\n"${pesan}"\n\nSalam hangat,\nMuhammad Rifky\nSoftware Engineer | Web, Mobile (Android), Data Science & ML\nEmail: ${gmailUser}\nGitHub: https://github.com/Justrifkyy\nLinkedIn: https://www.linkedin.com/in/muh-rifky-saputra-scania`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #FFFDF5; margin: 0; padding: 24px; color: #0A0A0A; }
            .card { background-color: #FFFFFF; border: 4px solid #0A0A0A; box-shadow: 6px 6px 0 #0A0A0A; max-width: 600px; margin: 0 auto; overflow: hidden; }
            .header { background-color: #FFE14D; border-bottom: 4px solid #0A0A0A; padding: 24px; }
            .header h1 { margin: 0; font-size: 22px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.5px; }
            .header .badge { display: inline-block; background-color: #0A0A0A; color: #FFE14D; font-family: monospace; font-size: 11px; font-weight: 800; padding: 3px 8px; margin-top: 8px; text-transform: uppercase; }
            .content { padding: 26px 24px; font-size: 15px; line-height: 1.7; color: #222; }
            .quote-box { background-color: #FFFDF5; border-left: 5px solid #FFE14D; border-top: 2px solid #0A0A0A; border-right: 2px solid #0A0A0A; border-bottom: 2px solid #0A0A0A; padding: 16px; margin: 20px 0; font-style: italic; color: #444; font-size: 14px; white-space: pre-wrap; }
            .links { margin: 24px 0 10px 0; padding-top: 18px; border-top: 2px dashed #0A0A0A; }
            .link-item { display: inline-block; margin-right: 14px; margin-bottom: 8px; font-family: monospace; font-weight: 800; font-size: 12px; }
            .link-item a { color: #0A0A0A; text-decoration: underline; }
            .sign { margin-top: 20px; font-weight: 700; }
            .footer { background-color: #0A0A0A; color: #FFFDF5; padding: 16px 24px; font-size: 11px; font-family: monospace; text-align: center; }
          </style>
        </head>
        <body>
          <div class="card">
            <div class="header">
              <h1>👋 Pesan Anda Sudah Diterima!</h1>
              <div class="badge">STATUS: 200 OK • DELIVERED</div>
            </div>
            <div class="content">
              <p>Halo <strong>${nama}</strong>,</p>
              <p>Terima kasih sudah mampir ke website portofolio saya dan menyempatkan diri untuk mengirimkan pesan! Pesan Anda telah mendarat dengan aman di inbox saya.</p>
              <p>Saya akan segera membaca dan merespon pesan Anda secepatnya (biasanya dalam <strong>1×24 jam</strong> jika tidak sedang fokus ngoding atau debugging).</p>
              
              <div style="font-family: monospace; font-size: 11px; font-weight: 900; text-transform: uppercase; color: #666; margin-top: 20px;">
                SALINAN PESAN ANDA:
              </div>
              <div class="quote-box">"${pesan}"</div>

              <div class="links">
                <div style="font-family: monospace; font-size: 11px; font-weight: 900; text-transform: uppercase; color: #666; margin-bottom: 8px;">
                  TERHUBUNG DENGAN SAYA:
                </div>
                <span class="link-item"><a href="https://github.com/Justrifkyy" target="_blank">GITHUB ↗</a></span>
                <span class="link-item"><a href="https://www.linkedin.com/in/muh-rifky-saputra-scania" target="_blank">LINKEDIN ↗</a></span>
                <span class="link-item"><a href="https://www.instagram.com/justrifkyy_" target="_blank">INSTAGRAM ↗</a></span>
              </div>

              <div class="sign">
                Salam hangat,<br>
                <span style="font-size: 17px; font-weight: 900;">Muhammad Rifky</span><br>
                <span style="font-family: monospace; font-size: 12px; color: #555;">Software Engineer (Web, Mobile Android, Data Science & ML)</span>
              </div>
            </div>
            <div class="footer">
              MUHAMMAD RIFKY • UNIVERSITAS MUSLIM INDONESIA • PORTFOLIO AUTO-RESPONDER
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Send both emails in parallel
    await Promise.all([
      transporter.sendMail(ownerMailOptions),
      transporter.sendMail(autoReplyOptions),
    ]);

    return NextResponse.json({
      success: true,
      message: "Pesan berhasil dikirim dan email konfirmasi telah dikirim ke pengirim!",
    });
  } catch (error: any) {
    console.error("Gagal mengirim email via SMTP:", error);
    return NextResponse.json(
      {
        success: false,
        error: error?.message || "Terjadi kesalahan pada server saat mengirim email.",
      },
      { status: 500 }
    );
  }
}
