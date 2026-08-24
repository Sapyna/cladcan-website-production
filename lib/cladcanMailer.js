import nodemailer from "nodemailer";

const GOLD = "#c4933d";
const TEXT = "#14212b";
const MUTED = "#6f7d87";
const BORDER = "#dde2e5";
const BG = "#f5f6f4";
const LOGO_URL = "https://cladcan.ca/images/cladcan-logo-current-site.png";

function esc(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function val(value) {
  const v = String(value || "").trim();
  return v ? esc(v) : "—";
}

function row(label, value) {
  return `<tr><td style="padding:12px 0;border-bottom:1px solid ${BORDER};font-size:14px;font-weight:700;color:${TEXT};width:45%;vertical-align:top;">${esc(label)}</td><td style="padding:12px 0;border-bottom:1px solid ${BORDER};font-size:14px;color:${TEXT};vertical-align:top;">${val(value)}</td></tr>`;
}

function shell({ heading, intro, leftTitle, leftRows, rightTitle, rightRows, messageTitle, message, footerNote }) {
  return `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head><body style="margin:0;padding:0;background:${BG};font-family:Arial,Helvetica,sans-serif;color:${TEXT};"><table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:${BG};padding:28px 12px;"><tr><td align="center"><table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:760px;background:#ffffff;border:1px solid #e7e9e8;border-collapse:separate;"><tr><td align="center" style="padding:30px 28px 24px;border-bottom:2px solid ${GOLD};"><img src="${LOGO_URL}" alt="CladCan" width="250" style="display:block;max-width:100%;height:auto;border:0;"></td></tr><tr><td style="padding:34px 40px 12px;"><table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0"><tr><td style="width:42px;vertical-align:top;font-size:30px;color:${GOLD};line-height:1;">▣</td><td><div style="font-size:28px;line-height:1.2;font-weight:800;color:${TEXT};">${esc(heading)}</div><div style="margin-top:8px;font-size:15px;line-height:1.6;color:${MUTED};">${esc(intro)}</div></td></tr></table></td></tr><tr><td style="padding:24px 40px 10px;"><table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0"><tr><td style="width:48%;vertical-align:top;padding-right:24px;"><div style="font-size:13px;font-weight:800;letter-spacing:.05em;color:${GOLD};text-transform:uppercase;padding-bottom:10px;border-bottom:1px solid ${BORDER};">${esc(leftTitle)}</div><table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">${leftRows}</table></td><td style="width:4%;border-left:1px solid ${BORDER};"></td><td style="width:48%;vertical-align:top;padding-left:24px;"><div style="font-size:13px;font-weight:800;letter-spacing:.05em;color:${GOLD};text-transform:uppercase;padding-bottom:10px;border-bottom:1px solid ${BORDER};">${esc(rightTitle)}</div><table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">${rightRows}</table></td></tr></table></td></tr><tr><td style="padding:24px 40px 34px;"><div style="font-size:13px;font-weight:800;letter-spacing:.05em;color:${GOLD};text-transform:uppercase;margin-bottom:10px;">${esc(messageTitle)}</div><div style="padding:18px 20px;border:1px solid #eadfc9;background:#fcfbf8;font-size:14px;line-height:1.7;color:${TEXT};white-space:pre-wrap;">${val(message)}</div></td></tr><tr><td style="padding:26px 40px;background:#f7f7f5;border-top:1px solid ${BORDER};"><table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0"><tr><td style="width:48%;vertical-align:middle;"><img src="${LOGO_URL}" alt="CladCan" width="210" style="display:block;max-width:100%;height:auto;border:0;"></td><td style="width:52%;vertical-align:middle;font-size:13px;line-height:1.9;color:${TEXT};"><strong>cladcan.ca</strong><br>info@cladcan.ca<br>+1 (844) 924-3030<br>North York, Ontario, Canada</td></tr></table></td></tr><tr><td align="center" style="padding:14px 20px;background:#151515;color:#ffffff;font-size:12px;">${esc(footerNote)}</td></tr></table></td></tr></table></body></html>`;
}

function getTransporter() {
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_APP_PASSWORD;
  if (!user || !pass) throw new Error("SMTP is not configured. SMTP_USER or SMTP_APP_PASSWORD is missing from the server environment.");
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: Number(process.env.SMTP_PORT || 465),
    secure: String(process.env.SMTP_SECURE || "true") !== "false",
    auth: { user, pass },
  });
}

export async function sendProjectInquiryEmail(data, attachments = []) {
  const transporter = getTransporter();
  const inquiryLabel = data.inquiryType ? data.inquiryType.replace(/(^|[-_ ])\w/g, m => m.toUpperCase()) : "Project";
  const html = shell({
    heading: "New Project Inquiry",
    intro: "You have received a new project inquiry from the CladCan website.",
    leftTitle: "Contact Information",
    leftRows: row("Full Name", `${data.firstName} ${data.lastName}`) + row("Email Address", data.email) + row("Phone Number", data.phone),
    rightTitle: "Project Details",
    rightRows: row("Inquiry Type", inquiryLabel) + row("Project Type", data.projectType) + row("Project Location", data.location) + row("Project Stage", data.stage),
    messageTitle: "Project Details / Message",
    message: data.details,
    footerNote: "This inquiry was submitted from the CladCan website.",
  });

  await transporter.sendMail({
    from: `CladCan Website <${process.env.SMTP_USER}>`,
    to: process.env.CONTACT_TO_EMAIL || "info@cladcan.ca",
    replyTo: data.email,
    subject: `New Project Inquiry — ${inquiryLabel} — ${data.firstName} ${data.lastName}`,
    html,
    text: `New Project Inquiry\n\nName: ${data.firstName} ${data.lastName}\nEmail: ${data.email}\nPhone: ${data.phone || "—"}\nInquiry Type: ${inquiryLabel}\nProject Type: ${data.projectType || "—"}\nProject Location: ${data.location || "—"}\nProject Stage: ${data.stage || "—"}\n\n${data.details || "No additional project details provided."}`,
    attachments,
  });
}

export async function sendShowroomEmail(data) {
  const transporter = getTransporter();
  const html = shell({
    heading: "Showroom Visit Request",
    intro: "A new showroom visit request was submitted through the CladCan website.",
    leftTitle: "Contact Information",
    leftRows: row("Full Name", `${data.firstName} ${data.lastName}`) + row("Email Address", data.email) + row("Phone Number", data.phone),
    rightTitle: "Visit Details",
    rightRows: row("Preferred Date", data.dateLabel) + row("Preferred Time", data.timeLabel),
    messageTitle: "Notes",
    message: data.notes,
    footerNote: "This showroom request was submitted from the CladCan website.",
  });

  await transporter.sendMail({
    from: `CladCan Website <${process.env.SMTP_USER}>`,
    to: process.env.CONTACT_TO_EMAIL || "info@cladcan.ca",
    replyTo: data.email,
    subject: `Showroom Visit Request — ${data.dateLabel} at ${data.timeLabel} — ${data.firstName} ${data.lastName}`,
    html,
    text: `Showroom Visit Request\n\nName: ${data.firstName} ${data.lastName}\nEmail: ${data.email}\nPhone: ${data.phone || "—"}\nPreferred Date: ${data.dateLabel}\nPreferred Time: ${data.timeLabel}\n\n${data.notes || "No additional notes provided."}`,
  });
}
