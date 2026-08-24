"use client";

import { useEffect } from "react";

const ENDPOINT = "https://formsubmit.co/info@cladcan.ca";
const CONTACT_FORM_URL = "https://cladcan.ca/contact";
const SHOWROOM_FORM_URL = "https://cladcan.ca/contact/showroom-visit";

function upsertHidden(form, name, value) {
  let input = form.querySelector(`input[type="hidden"][name="${name}"]`);
  if (!input) {
    input = document.createElement("input");
    input.type = "hidden";
    input.name = name;
    form.appendChild(input);
  }
  input.value = value;
}

function configureContact(form) {
  const first = String(form.querySelector('[name="firstName"]')?.value || "").trim();
  const last = String(form.querySelector('[name="lastName"]')?.value || "").trim();
  const inquiryType = String(form.querySelector('[name="inquiryType"]')?.value || "Project").trim();
  const email = String(form.querySelector('[name="email"]')?.value || "").trim();

  upsertHidden(form, "_subject", `CladCan website inquiry — ${inquiryType || "Project"} — ${first} ${last}`.trim());
  upsertHidden(form, "_template", "table");
  upsertHidden(form, "_replyto", email);
  upsertHidden(form, "_url", CONTACT_FORM_URL);
  upsertHidden(form, "_next", CONTACT_FORM_URL + "?submitted=1");
  upsertHidden(form, "_captcha", "false");
}

function configureShowroom(form) {
  const email = String(form.querySelector('[name="email"]')?.value || "").trim();
  const date = String(form.querySelector('[name="date"]')?.value || "").trim();
  const time = String(form.querySelector('[name="time"]')?.value || "").trim();

  upsertHidden(form, "_subject", `CladCan showroom visit — ${date} at ${time}`);
  upsertHidden(form, "_template", "table");
  upsertHidden(form, "_replyto", email);
  upsertHidden(form, "_url", SHOWROOM_FORM_URL);
  upsertHidden(form, "_next", SHOWROOM_FORM_URL + "?submitted=1");
  upsertHidden(form, "_captcha", "false");
}

export default function FormSubmitClientSubmit() {
  useEffect(() => {
    function onSubmit(event) {
      const form = event.target;
      if (!(form instanceof HTMLFormElement)) return;

      const isContact = form.classList.contains("contactFinalForm");
      const isShowroom = form.classList.contains("showroomBookingForm");
      if (!isContact && !isShowroom) return;

      event.preventDefault();
      event.stopImmediatePropagation();

      const trap = form.querySelector('[name="website"]');
      if (trap && trap.value) return;

      if (isContact) configureContact(form);
      else configureShowroom(form);

      form.action = ENDPOINT;
      form.method = "POST";
      form.enctype = "multipart/form-data";

      const button = form.querySelector('button[type="submit"]');
      if (button) {
        button.disabled = true;
        button.textContent = isContact ? "Sending…" : "Sending request…";
      }

      HTMLFormElement.prototype.submit.call(form);
    }

    document.addEventListener("submit", onSubmit, true);
    return () => document.removeEventListener("submit", onSubmit, true);
  }, []);

  return null;
}
