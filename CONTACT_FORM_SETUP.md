# CladCan Contact Form — Email Setup

The website form now submits to `/api/contact` and sends a real email using SMTP.

## 1. Create `.env.local`

Copy `.env.example` to `.env.local` and complete:

```env
SMTP_HOST=your-smtp-host
SMTP_PORT=587
SMTP_USER=your-mailbox-or-smtp-user
SMTP_PASS=your-password-or-app-password
CONTACT_TO_EMAIL=info@cladcan.ca
CONTACT_FROM_EMAIL=website@cladcan.ca
```

`CONTACT_FROM_EMAIL` must be permitted by your mail provider. If left blank, `SMTP_USER` is used.

## 2. Install and run

```bash
npm install
npm run dev
```

## 3. Test

Open `http://localhost:3005/contact`, submit the form, and confirm that the email arrives at `CONTACT_TO_EMAIL`.

## Attachments

- PDF and common image files
- Maximum 8 MB per file
- Maximum 15 MB combined

## Deployment

Add the same environment variables in Vercel/your hosting provider. Never commit `.env.local`.
