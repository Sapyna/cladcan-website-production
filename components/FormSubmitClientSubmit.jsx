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
function removeHidden(form, name) { form.querySelector(`input[type="hidden"][name="${name}"]`)?.remove(); }
function setStatus(form, kind, message) {
  const className = form.classList.contains("contactFinalForm") ? "contactFinalStatus" : "showroomBookingStatus";
  let node = form.querySelector(`.${className}`);
  if (!node) { node = document.createElement("p"); form.appendChild(node); }
  node.className = `${className} ${kind}`;
  node.setAttribute("role", kind === "error" ? "alert" : "status");
  node.setAttribute("aria-live", "polite");
  node.textContent = message;
}
function validEmail(value) {
  const email = String(value || "").trim();
  return email.length <= 254 && /^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?)+$/.test(email) && !email.includes("..");
}
function validPhone(value) {
  const raw = String(value || "").trim();
  if (!raw) return true;
  if (!/^[+()\-.\s0-9]+$/.test(raw)) return false;
  let digits = raw.replace(/\D/g, "");
  if (digits.length === 11 && digits[0] === "1") digits = digits.slice(1);
  if (digits.length !== 10) return false;
  if (!/^[2-9]\d{2}[2-9]\d{6}$/.test(digits)) return false;
  if (/^(\d)\1{9}$/.test(digits)) return false;
  if (["1234567890", "0123456789", "9876543210"].includes(digits)) return false;
  return true;
}
function invalidate(input, message) {
  input.setCustomValidity(message);
  input.reportValidity();
  input.focus();
  return false;
}
function validate(form, isShowroom) {
  const email = form.elements.email;
  const phone = form.elements.phone;
  email?.setCustomValidity(""); phone?.setCustomValidity("");
  if (!form.checkValidity()) { form.reportValidity(); return false; }
  if (email && !validEmail(email.value)) return invalidate(email, "Please enter a valid email address, for example name@example.com.");
  if (phone && !validPhone(phone.value)) return invalidate(phone, "Please enter a valid 10-digit Canadian or US phone number, for example (416) 555-1234.");
  if (isShowroom) {
    const date = form.elements.date, time = form.elements.time;
    date?.setCustomValidity(""); time?.setCustomValidity("");
    if (!date?.value) return invalidate(date, "Please select a showroom visit date.");
    const selected = new Date(`${date.value}T12:00:00`), today = new Date(); today.setHours(0,0,0,0);
    if (Number.isNaN(selected.getTime()) || selected <= today) return invalidate(date, "Please choose a future date.");
    if ([0,6].includes(selected.getDay())) return invalidate(date, "Showroom visits are available Monday through Friday. Please choose a weekday.");
    if (!SHOWROOM_TIMES.has(time?.value)) return invalidate(time, "Please select an available showroom visit time.");
  }
  return true;
}
function configure(form, isContact) {
  const email = String(form.elements.email?.value || "").trim();
  if (isContact) {
    const first = String(form.elements.firstName?.value || "").trim();
    const last = String(form.elements.lastName?.value || "").trim();
    const type = String(form.elements.inquiryType?.value || "Project").trim();
    upsertHidden(form, "_subject", `CladCan website inquiry — ${type} — ${first} ${last}`);
    upsertHidden(form, "_url", CONTACT_FORM_URL);
  } else {
    upsertHidden(form, "_subject", `CladCan showroom visit — ${form.elements.date?.value || ""} at ${form.elements.time?.value || ""}`);
    upsertHidden(form, "_url", SHOWROOM_FORM_URL);
  }
  upsertHidden(form, "_template", "table");
  upsertHidden(form, "_replyto", email);
  upsertHidden(form, "_captcha", "false");
  removeHidden(form, "_next");
}

export default function FormSubmitClientSubmit() {
  useEffect(() => {
    let frame = document.querySelector(`iframe[name="${FRAME_NAME}"]`);
    if (!frame) {
      frame = document.createElement("iframe"); frame.name = FRAME_NAME; frame.title = "Form submission response"; frame.style.display = "none"; document.body.appendChild(frame);
    }
    const clearValidity = (event) => { if (event.target instanceof HTMLInputElement || event.target instanceof HTMLSelectElement) event.target.setCustomValidity(""); };
    document.addEventListener("input", clearValidity, true);
    document.addEventListener("change", clearValidity, true);

    function onFrameLoad() {
      const formId = frame.dataset.pendingFormId;
      if (!formId) return;
      const form = document.getElementById(formId); frame.dataset.pendingFormId = "";
      if (!form) return;
      const isContact = form.classList.contains("contactFinalForm");
      const button = form.querySelector('button[type="submit"]');
      if (button) { button.disabled = false; button.innerHTML = button.dataset.originalHtml || button.innerHTML; }
      setStatus(form, "success", isContact ? "Thank you. Your information has been sent. A member of the CladCan team will contact you soon." : "Your showroom visit request has been sent. A member of the CladCan team will contact you to confirm the appointment.");
      form.reset();
    }
    frame.addEventListener("load", onFrameLoad);

    function onSubmit(event) {
      const form = event.target;
      if (!(form instanceof HTMLFormElement)) return;
      const isContact = form.classList.contains("contactFinalForm"), isShowroom = form.classList.contains("showroomBookingForm");
      if (!isContact && !isShowroom) return;
      event.preventDefault(); event.stopImmediatePropagation();
      if (form.elements.website?.value) return;
      if (!validate(form, isShowroom)) return;
      configure(form, isContact);
      if (!form.id) form.id = isContact ? "cladcan-contact-form" : "cladcan-showroom-form";
      frame.dataset.pendingFormId = form.id;
      form.action = ENDPOINT; form.method = "POST"; form.enctype = "multipart/form-data"; form.target = FRAME_NAME;
      const button = form.querySelector('button[type="submit"]');
      if (button) { if (!button.dataset.originalHtml) button.dataset.originalHtml = button.innerHTML; button.disabled = true; button.textContent = isContact ? "Sending…" : "Sending request…"; }
      setStatus(form, "sending", "Sending…");
      form.submit();
    }
    document.addEventListener("submit", onSubmit, true);
    return () => { document.removeEventListener("submit", onSubmit, true); document.removeEventListener("input", clearValidity, true); document.removeEventListener("change", clearValidity, true); frame?.removeEventListener("load", onFrameLoad); };
  }, []);
  return null;
}
