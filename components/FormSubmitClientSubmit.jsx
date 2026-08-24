"use client";

import { useEffect } from "react";

const ENDPOINT = "https://formsubmit.co/info@cladcan.ca";
const CONTACT_FORM_URL = "https://cladcan.ca/contact";
const SHOWROOM_FORM_URL = "https://cladcan.ca/contact/showroom-visit";
const FRAME_NAME = "cladcan-formsubmit-frame";

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

function removeHidden(form, name) {
  form.querySelector(`input[type="hidden"][name="${name}"]`)?.remove();
}

function setStatus(form, kind, message) {
  const isContact = form.classList.contains("contactFinalForm");
  const className = isContact ? "contactFinalStatus" : "showroomBookingStatus";
  let node = form.querySelector(`.${className}`);
  if (!node) {
    node = document.createElement("p");
    node.className = className;
    form.appendChild(node);
  }
  node.className = `${className} ${kind}`;
  node.setAttribute("role", kind === "error" ? "alert" : "status");
  node.setAttribute("aria-live", "polite");
  node.textContent = message;
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
  upsertHidden(form, "_captcha", "false");
  removeHidden(form, "_next");
}

function configureShowroom(form) {
  const email = String(form.querySelector('[name="email"]')?.value || "").trim();
  const date = String(form.querySelector('[name="date"]')?.value || "").trim();
  const time = String(form.querySelector('[name="time"]')?.value || "").trim();

  upsertHidden(form, "_subject", `CladCan showroom visit — ${date} at ${time}`);
  upsertHidden(form, "_template", "table");
  upsertHidden(form, "_replyto", email);
  upsertHidden(form, "_url", SHOWROOM_FORM_URL);
  upsertHidden(form, "_captcha", "false");
  removeHidden(form, "_next");
}

export default function FormSubmitClientSubmit() {
  useEffect(() => {
    let frame = document.querySelector(`iframe[name="${FRAME_NAME}"]`);
    if (!frame) {
      frame = document.createElement("iframe");
      frame.name = FRAME_NAME;
      frame.title = "Form submission response";
      frame.style.display = "none";
      document.body.appendChild(frame);
    }

    function onFrameLoad() {
      const formId = frame.dataset.pendingFormId;
      if (!formId) return;
      const form = document.getElementById(formId);
      frame.dataset.pendingFormId = "";
      if (!form) return;

      const isContact = form.classList.contains("contactFinalForm");
      const button = form.querySelector('button[type="submit"]');
      if (button) {
        button.disabled = false;
        button.innerHTML = button.dataset.originalHtml || button.innerHTML;
      }
      setStatus(
        form,
        "success",
        isContact
          ? "Thank you. Your information has been sent. A member of the CladCan team will contact you soon."
          : "Your showroom visit request has been sent. A member of the CladCan team will contact you to confirm the appointment."
      );
      form.reset();
    }

    frame.addEventListener("load", onFrameLoad);

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

      if (!form.id) form.id = isContact ? "cladcan-contact-form" : "cladcan-showroom-form";
      frame.dataset.pendingFormId = form.id;

      form.action = ENDPOINT;
      form.method = "POST";
      form.enctype = "multipart/form-data";
      form.target = FRAME_NAME;

      const button = form.querySelector('button[type="submit"]');
      if (button) {
        if (!button.dataset.originalHtml) button.dataset.originalHtml = button.innerHTML;
        button.disabled = true;
        button.textContent = isContact ? "Sending…" : "Sending request…";
      }
      setStatus(form, "sending", "Sending…");

      HTMLFormElement.prototype.submit.call(form);
    }

    document.addEventListener("submit", onSubmit, true);
    return () => {
      document.removeEventListener("submit", onSubmit, true);
      frame?.removeEventListener("load", onFrameLoad);
    };
  }, []);

  return null;
}
