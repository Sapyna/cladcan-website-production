"use client";

import { useEffect } from "react";

const ENDPOINT = "https://formsubmit.co/ajax/info@cladcan.ca";
const CONTACT_FORM_URL = "https://cladcan.ca/contact";
const SHOWROOM_FORM_URL = "https://cladcan.ca/contact/showroom-visit";

function setStatus(form, kind, message) {
  const isContact = form.classList.contains("contactFinalForm");
  const selector = isContact ? ".contactFinalStatus" : ".showroomBookingStatus";
  let node = form.querySelector(selector);
  if (!node) {
    node = document.createElement("p");
    node.className = isContact ? "contactFinalStatus" : "showroomBookingStatus";
    form.appendChild(node);
  }
  node.className = `${isContact ? "contactFinalStatus" : "showroomBookingStatus"} ${kind}`;
  node.setAttribute("role", kind === "error" ? "alert" : "status");
  node.setAttribute("aria-live", "polite");
  node.textContent = message;
}

function getButton(form) {
  return form.querySelector('button[type="submit"]');
}

function normaliseContactFields(data) {
  const first = String(data.get("firstName") || "").trim();
  const last = String(data.get("lastName") || "").trim();
  const inquiryType = String(data.get("inquiryType") || "Project").trim();
  const email = String(data.get("email") || "").trim();

  data.set("_subject", `CladCan website inquiry — ${inquiryType || "Project"} — ${first} ${last}`.trim());
  data.set("_template", "table");
  data.set("_replyto", email);
  data.set("_honey", "");
  data.set("_url", CONTACT_FORM_URL);
  data.set("Name", `${first} ${last}`.trim());
  data.set("Email", email);
  data.set("Phone", String(data.get("phone") || ""));
  data.set("Inquiry Type", inquiryType);
  data.set("Project Location", String(data.get("location") || ""));
  data.set("Project Type", String(data.get("projectType") || ""));
  data.set("Project Stage", String(data.get("stage") || ""));
  data.set("Project Details", String(data.get("details") || "No additional project details provided."));
}

function normaliseShowroomFields(data) {
  const first = String(data.get("firstName") || "").trim();
  const last = String(data.get("lastName") || "").trim();
  const email = String(data.get("email") || "").trim();
  const date = String(data.get("date") || "").trim();
  const time = String(data.get("time") || "").trim();

  data.set("_subject", `CladCan showroom visit — ${date} at ${time}`);
  data.set("_template", "table");
  data.set("_replyto", email);
  data.set("_honey", "");
  data.set("_url", SHOWROOM_FORM_URL);
  data.set("Name", `${first} ${last}`.trim());
  data.set("Email", email);
  data.set("Phone", String(data.get("phone") || ""));
  data.set("Preferred Date", date);
  data.set("Preferred Time", time);
  data.set("Notes", String(data.get("notes") || "No additional notes provided."));
}

export default function FormSubmitClientSubmit() {
  useEffect(() => {
    async function onSubmit(event) {
      const form = event.target;
      if (!(form instanceof HTMLFormElement)) return;

      const isContact = form.classList.contains("contactFinalForm");
      const isShowroom = form.classList.contains("showroomBookingForm");
      if (!isContact && !isShowroom) return;

      event.preventDefault();
      event.stopImmediatePropagation();

      const trap = form.querySelector('[name="website"]');
      if (trap && trap.value) return;

      const button = getButton(form);
      const originalText = button?.textContent || "Submit";
      if (button) {
        button.disabled = true;
        button.textContent = isContact ? "Sending…" : "Sending request…";
      }
      setStatus(form, "sending", "Sending…");

      try {
        const data = new FormData(form);
        if (isContact) normaliseContactFields(data);
        else normaliseShowroomFields(data);

        const response = await fetch(ENDPOINT, {
          method: "POST",
          headers: { Accept: "application/json" },
          body: data,
        });
        const result = await response.json().catch(() => ({}));

        if (!response.ok || result?.success === false) {
          throw new Error(`FormSubmit response — HTTP ${response.status} | success: ${String(result?.success)} | message: ${result?.message || "No message returned."}`);
        }

        const successMessage = isContact
          ? `FormSubmit response — HTTP ${response.status} | success: ${String(result?.success)} | message: ${result?.message || "Submission accepted."}`
          : `FormSubmit response — HTTP ${response.status} | success: ${String(result?.success)} | message: ${result?.message || "Showroom request accepted."}`;
        setStatus(form, "success", successMessage);
        form.reset();
      } catch (error) {
        setStatus(form, "error", error?.message || "We could not send your request. Please try again.");
      } finally {
        if (button) {
          button.disabled = false;
          button.textContent = originalText;
        }
      }
    }

    document.addEventListener("submit", onSubmit, true);
    return () => document.removeEventListener("submit", onSubmit, true);
  }, []);

  return null;
}
