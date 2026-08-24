"use client";

import { useEffect } from "react";

const ENDPOINT = "https://formsubmit.co/info@cladcan.ca";
const CONTACT_FORM_URL = "https://cladcan.ca/contact";
const SHOWROOM_FORM_URL = "https://cladcan.ca/contact/showroom-visit";
const FRAME_NAME = "cladcan-formsubmit-frame";
const SHOWROOM_TIMES = new Set(["09:00", "10:30", "12:00", "13:30", "15:00"]);

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

function validEmail(value) {
  const email = String(value || "").trim();
  if (!email || email.length > 254 || /\s/.test(email)) return false;
  const parts = email.split("@");
  if (parts.length !== 2 || !parts[0] || !parts[1]) return false;
  const [local, domain] = parts;
  if (local.startsWith(".") || local.endsWith(".") || local.includes("..")) return false;
  if (!domain.includes(".") || domain.startsWith(".") || domain.endsWith(".") || domain.includes("..")) return false;
  return /^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Za-z0-9-]+(?:\.[A-Za-z0-9-]+)+$/.test(email);
}

function validNorthAmericanPhone(value) {
  const raw = String(value || "").trim();
  if (!raw) return true;
  if (!/^[+()\-\.\s0-9]+$/.test(raw)) return false;
  let digits = raw.replace(/\D/g, "");
  if (digits.length === 11 && digits.startsWith("1")) digits = digits.slice(1);
  if (digits.length !== 10) return false;

  const area = digits.slice(0, 3);
  const exchange = digits.slice(3, 6);
  if (!/^[2-9]\d{2}$/.test(area) || !/^[2-9]\d{2}$/.test(exchange)) return false;
  if (/^(\d)\1{9}$/.test(digits)) return false;
  if (["1234567890", "0123456789", "9876543210"].includes(digits)) return false;
  return true;
}

function validateCommonFields(form) {
  const email = form.querySelector('input[name="email"]');
  const phone = form.querySelector('input[name="phone"]');

  if (email) {
    email.setCustomValidity("");
    if (!validEmail(email.value)) {
      email.setCustomValidity("Please enter a valid email address, for example name@example.com.");
      email.reportValidity();
      email.focus();
      return false;
    }
  }

  if (phone) {
    phone.setCustomValidity("");
    if (!validNorthAmericanPhone(phone.value)) {
      phone.setCustomValidity("Please enter a valid Canadian or US phone number, for example (416) 555-1234 or +1 416 555 1234.");
      phone.reportValidity();
      phone.focus();
      return false;
    }
  }

  return true;
}

function validateShowroomFields(form) {
  const dateInput = form.querySelector('input[name="date"]');
  const timeInput = form.querySelector('select[name="time"]');

  if (dateInput) {
    dateInput.setCustomValidity("");
    if (!dateInput.value) {
      dateInput.setCustomValidity("Please select a showroom visit date.");
      dateInput.reportValidity();
      dateInput.focus();
      return false;
    }
    const selected = new Date(`${dateInput.value}T12:00:00`);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (Number.isNaN(selected.getTime()) || selected <= today) {
      dateInput.setCustomValidity("Please choose a future date.");
      dateInput.reportValidity();
      dateInput.focus();
      return false;
    }
    if (selected.getDay() === 0 || selected.getDay() === 6) {
      dateInput.setCustomValidity("Showroom visits are available Monday through Friday. Please choose a weekday.");
      dateInput.reportValidity();
      dateInput.focus();
      return false;
    }
  }

  if (timeInput && !SHOWROOM_TIMES.has(timeInput.value)) {
    timeInput.setCustomValidity("Please select an available showroom visit time.");
    timeInput.reportValidity();
    timeInput.focus();
    return false;
  }
  timeInput?.setCustomValidity("");
  return true;
}

function validateForm(form, isShowroom) {
  if (!form.checkValidity()) {
    form.reportValidity();
    return false;
  }
  if (!validateCommonFields(form)) return false;
  if (isShowroom && !validateShowroomFields(form)) return false;
  return true;
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

    function prepareFields() {
      document.querySelectorAll('input[name="email"]').forEach((input) => {
        input.setAttribute("inputmode", "email");
        input.setAttribute("autocomplete", "email");
        input.addEventListener("input", () => input.setCustomValidity(""));
      });
      document.querySelectorAll('input[name="phone"]').forEach((input) => {
        input.setAttribute("inputmode", "tel");
        input.setAttribute("autocomplete", "tel");
        input.setAttribute("placeholder", input.getAttribute("placeholder") || "(416) 555-1234");
        input.addEventListener("input", () => input.setCustomValidity(""));
      });
      document.querySelectorAll('input[name="date"], select[name="time"]').forEach((input) => {
        input.addEventListener("input", () => input.setCustomValidity(""));
        input.addEventListener("change", () => input.setCustomValidity(""));
      });
    }

    prepareFields();

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

      if (!validateForm(form, isShowroom)) return;

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
