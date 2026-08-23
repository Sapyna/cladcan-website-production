import nodemailer from "nodemailer";

export const runtime = "nodejs";

const allowedTimes = new Map([
  ["09:00", "9:00 AM"],
  ["10:30", "10:30 AM"],
  ["12:00", "12:00 PM"],
  ["13:30", "1:30 PM"],
  ["15:00", "3:00 PM"],
]);

function clean(value, max = 500) {
  return String(value || "").trim().slice(0, max);
}

function escapeHtml(value) {
  return clean(value, 3000).replace(/[&<>"']/g, character => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;",
  }[character]));
}

function validEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function formatDate(dateString) {
  return new Intl.DateTimeFormat("en-CA", {
    weekday: "long", year: "numeric", month: "long", day: "numeric",
    timeZone: "America/Toronto",
  }).format(new Date(dateString + "T12:00:00"));
}

export async function POST(request) {
  try {
    const contentType = request.headers.get("content-type") || "";
    if (!contentType.includes("multipart/form-data") && !contentType.includes("application/x-www-form-urlencoded")) {
      return Response.json({ message: "Unsupported request format." }, { status: 415 });
    }
    const form = await request.formData();
    if (clean(form.get("website"), 200)) {
      return Response.json({ message: "Your showroom visit has been confirmed." });
    }

    const firstName = clean(form.get("firstName"), 80);
    const lastName = clean(form.get("lastName"), 80);
    const email = clean(form.get("email"), 160);
    const phone = clean(form.get("phone"), 40);
    const date = clean(form.get("date"), 10);
    const time = clean(form.get("time"), 5);
    const notes = clean(form.get("notes"), 2000);

    if (!firstName || !lastName || !email || !date || !time) {
      return Response.json({ message: "Please complete all required fields." }, { status: 400 });
    }
    if (!validEmail(email) || !allowedTimes.has(time) || !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
      return Response.json({ message: "Please enter a valid email, date and time." }, { status: 400 });
    }

    const visitDate = new Date(date + "T12:00:00");
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (Number.isNaN(visitDate.getTime()) || visitDate <= today || visitDate.getDay() === 0 || visitDate.getDay() === 6) {
      return Response.json({ message: "Please choose a future weekday." }, { status: 400 });
    }

    const { SMTP_HOST, SMTP_USER, SMTP_PASS } = process.env;
    const SMTP_PORT = Number(process.env.SMTP_PORT || 587);
    const from = process.env.CONTACT_FROM_EMAIL || SMTP_USER;
    if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !from) {
      return Response.json({ message: "Showroom booking is temporarily unavailable. Please call +1 (844) 924-3030." }, { status: 503 });
    }

    const dateLabel = formatDate(date);
    const timeLabel = allowedTimes.get(time);
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_PORT === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    await transporter.verify();
    await Promise.all([
      transporter.sendMail({
        from: `CladCan Website <${from}>`,
        to: "info@cladca.ca",
        replyTo: email,
        subject: `Showroom visit: ${dateLabel} at ${timeLabel}`,
        text: `Showroom visit request\n\nName: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone || "Not provided"}\nDate: ${dateLabel}\nTime: ${timeLabel}\nNotes: ${notes || "None"}`,
        html: `<h2>Showroom visit request</h2><p><strong>Name:</strong> ${escapeHtml(firstName)} ${escapeHtml(lastName)}</p><p><strong>Email:</strong> ${escapeHtml(email)}</p><p><strong>Phone:</strong> ${escapeHtml(phone || "Not provided")}</p><p><strong>Date:</strong> ${escapeHtml(dateLabel)}</p><p><strong>Time:</strong> ${escapeHtml(timeLabel)}</p><p><strong>Notes:</strong><br>${escapeHtml(notes || "None").replace(/\n/g, "<br>")}</p>`,
      }),
      transporter.sendMail({
        from: `CladCan <${from}>`,
        to: email,
        replyTo: "info@cladca.ca",
        subject: "Your CladCan showroom visit is confirmed",
        text: `Hello ${firstName},\n\nYour showroom visit is confirmed for ${dateLabel} at ${timeLabel}.\n\nCladCan Building Envelope & Façade Contractors\n5000 Dufferin St, Unit K\nNorth York, ON M3H 5T5\n\nIf you need to make a change, call +1 (844) 924-3030.\n\nCladCan`,
        html: `<p>Hello ${escapeHtml(firstName)},</p><p>Your showroom visit is confirmed for <strong>${escapeHtml(dateLabel)} at ${escapeHtml(timeLabel)}</strong>.</p><p>CladCan Building Envelope &amp; Façade Contractors<br>5000 Dufferin St, Unit K<br>North York, ON M3H 5T5</p><p>If you need to make a change, call <a href="tel:+18449243030">+1 (844) 924-3030</a>.</p><p>CladCan</p>`,
      }),
    ]);

    return Response.json({
      message: `Your showroom visit is confirmed for ${dateLabel} at ${timeLabel}. A confirmation has been sent to your email.`,
    });
  } catch (error) {
    console.error("Showroom booking error:", error);
    return Response.json({ message: "We could not confirm your visit. Please try again or call +1 (844) 924-3030." }, { status: 500 });
  }
}
