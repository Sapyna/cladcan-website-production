"use client";

import { useEffect } from "react";

const FORMSUBMIT_URL = "https://formsubmit.co/info@cladcan.ca";
const THANK_YOU_URL = "https://cladcan.ca/contact?submitted=1#project-inquiry";

function addHidden(form, name, value) {
  let input = form.querySelector(`input[name="${name}"]`);
  if (!input) {
    input = document.createElement("input");
    input.type = "hidden";
    input.name = name;
    form.appendChild(input);
  }
  input.value = value;
}

export default function Web3FormsClientSubmit() {
  useEffect(() => {
    function prepareNativeFormSubmit(event) {
      const form = event.target;
      if (!(form instanceof HTMLFormElement)) return;
      if (!form.matches(".contactFinalForm, .showroomBookingForm")) return;

      // Capture before React's onSubmit handlers. This deliberately bypasses the
      // old /api routes and sends the browser's multipart form directly to
      // FormSubmit, which is their documented path for file attachments.
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();

      const isShowroom = form.classList.contains("showroomBookingForm");
      const email = form.querySelector('input[name="email"]')?.value?.trim() || "";
      const firstName = form.querySelector('input[name="firstName"]')?.value?.trim() || "";
      const lastName = form.querySelector('input[name="lastName"]')?.value?.trim() || "";

      if (!form.reportValidity()) return;

      // FormSubmit requires a real absolute form URL when its anti-bot checks
      // cannot infer one reliably.
      addHidden(form, "_url", window.location.href.split("#")[0]);
      addHidden(form, "_subject", isShowroom
        ? `CladCan showroom visit request — ${firstName} ${lastName}`.trim()
        : `CladCan website project inquiry — ${firstName} ${lastName}`.trim());
      addHidden(form, "_template", "table");
      addHidden(form, "_next", THANK_YOU_URL);
      addHidden(form, "_replyto", email);
      addHidden(form, "_captcha", "false");

      // FormSubmit's honeypot field is _honey. Keep it empty for legitimate users.
      addHidden(form, "_honey", "");

      // Native browser submission is intentional: no fetch/AJAX and no server
      // proxy. This preserves multipart/form-data and attached File objects.
      form.action = FORMSUBMIT_URL;
      form.method = "POST";
      form.enctype = "multipart/form-data";
      form.submit();
    }

    document.addEventListener("submit", prepareNativeFormSubmit, true);
    return () => document.removeEventListener("submit", prepareNativeFormSubmit, true);
  }, []);

  return null;
}
