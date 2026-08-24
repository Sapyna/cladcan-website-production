"use client";

import { useEffect } from "react";

const ENDPOINT = "https://api.web3forms.com/submit";

function setStatus(form, type, message) {
  const selector = form.classList.contains("showroomBookingForm")
    ? ".showroomBookingStatus"
    : ".contactFinalStatus";

  let status = form.querySelector(selector);
  if (!status) {
    status = document.createElement("p");
    status.className = selector.slice(1);
    status.setAttribute("aria-live", "polite");
    const button = form.querySelector('button[type="submit"]');
    (button || form.lastElementChild)?.insertAdjacentElement("afterend", status);
  }

  status.classList.remove("idle", "sending", "success", "error");
  status.classList.add(type);
  status.setAttribute("role", type === "error" ? "alert" : "status");
  status.textContent = message;
}

function setButtonState(form, sending) {
  const button = form.querySelector('button[type="submit"]');
  if (!button) return;

  if (!button.dataset.originalHtml) button.dataset.originalHtml = button.innerHTML;
  button.disabled = sending;

  if (sending) {
    button.textContent = form.classList.contains("showroomBookingForm")
      ? "Sending request…"
      : "Sending…";
  } else {
    button.innerHTML = button.dataset.originalHtml;
  }
}

function buildPayload(form) {
  const data = new FormData(form);
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    throw new Error(
      "Web3Forms is not configured. NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY is missing from .env.local."
    );
  }

  data.set("access_key", accessKey);
  data.set("from_name", "CladCan Website");
  data.set("botcheck", "");

  if (form.classList.contains("showroomBookingForm")) {
    const firstName = String(data.get("firstName") || "").trim();
    const lastName = String(data.get("lastName") || "").trim();
    data.set("name", `${firstName} ${lastName}`.trim());
    data.set("subject", `CladCan showroom visit request — ${firstName} ${lastName}`.trim());
    data.set("message", String(data.get("notes") || "Showroom visit request"));
  } else {
    const firstName = String(data.get("firstName") || "").trim();
    const lastName = String(data.get("lastName") || "").trim();
    const inquiryType = String(data.get("inquiryType") || "Project").trim();
    data.set("name", `${firstName} ${lastName}`.trim());
    data.set("subject", `CladCan website inquiry — ${inquiryType} — ${firstName} ${lastName}`.trim());
    if (!data.get("message")) data.set("message", String(data.get("details") || "No additional project details provided."));
  }

  return data;
}

export default function Web3FormsClientSubmit() {
  useEffect(() => {
    async function onSubmit(event) {
      const form = event.target;
      if (!(form instanceof HTMLFormElement)) return;
      if (!form.matches(".contactFinalForm, .showroomBookingForm")) return;

      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();

      setButtonState(form, true);
      setStatus(form, "sending", "Sending…");

      try {
        const payload = buildPayload(form);
        const response = await fetch(ENDPOINT, {
          method: "POST",
          body: payload,
          headers: { Accept: "application/json" },
        });

        const result = await response.json().catch(() => ({}));
        if (!response.ok || result?.success === false) {
          throw new Error(result?.message || `Web3Forms returned ${response.status}.`);
        }

        const isShowroom = form.classList.contains("showroomBookingForm");
        setStatus(
          form,
          "success",
          isShowroom
            ? "Thank you. Your showroom visit request has been sent. The CladCan team will contact you to confirm the appointment."
            : "Thank you. Your information has been sent. A member of the CladCan team will contact you soon."
        );
        form.reset();
        form.dispatchEvent(new Event("reset", { bubbles: true }));
      } catch (error) {
        setStatus(form, "error", error?.message || "We could not send the form. Please try again.");
      } finally {
        setButtonState(form, false);
      }
    }

    document.addEventListener("submit", onSubmit, true);
    return () => document.removeEventListener("submit", onSubmit, true);
  }, []);

  return null;
}
