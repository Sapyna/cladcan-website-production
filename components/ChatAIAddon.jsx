"use client";

import { useEffect } from "react";

const FORM_ENDPOINT = "https://formsubmit.co/info@cladcan.ca";
const FRAME_NAME = "cladcan-ai-question-frame";

function ensureFrame() {
  let frame = document.querySelector(`iframe[name="${FRAME_NAME}"]`);
  if (!frame) {
    frame = document.createElement("iframe");
    frame.name = FRAME_NAME;
    frame.title = "CladCan AI question submission";
    frame.style.display = "none";
    document.body.appendChild(frame);
  }
  return frame;
}

function hidden(form, name, value) {
  const input = document.createElement("input");
  input.type = "hidden";
  input.name = name;
  input.value = String(value ?? "");
  form.appendChild(input);
}

function validEmail(value) {
  const email = String(value || "").trim();
  return email.length <= 254 && /^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?)+$/.test(email) && !email.includes("..");
}

function validPhone(value) {
  let digits = String(value || "").replace(/\D/g, "");
  if (digits.length === 11 && digits[0] === "1") digits = digits.slice(1);
  return /^[2-9]\d{2}[2-9]\d{6}$/.test(digits) && !/^(\d)\1{9}$/.test(digits) && !["1234567890", "0123456789", "9876543210"].includes(digits);
}

export default function ChatAIAddon() {
  useEffect(() => {
    ensureFrame();

    function closeAI(panel) {
      panel?.querySelector(".cladcanAiScreen")?.remove();
      panel?.classList.remove("cladcanAiOpen");
    }

    function submitQuestion(panel, question, fullName, email, phone) {
      const form = document.createElement("form");
      form.action = FORM_ENDPOINT;
      form.method = "POST";
      form.target = FRAME_NAME;
      form.style.display = "none";
      hidden(form, "_subject", `CladCan AI question — ${fullName}`);
      hidden(form, "_template", "table");
      hidden(form, "_captcha", "false");
      hidden(form, "_url", window.location.href);
      hidden(form, "_replyto", email);
      hidden(form, "Source", "CladCan AI Assistant — pre-API question");
      hidden(form, "Full Name", fullName);
      hidden(form, "Email", email);
      hidden(form, "Phone", phone);
      hidden(form, "Question", question);
      document.body.appendChild(form);
      form.submit();
      setTimeout(() => form.remove(), 5000);

      const body = panel.querySelector(".cladcanAiBody");
      if (body) {
        body.innerHTML = `
          <div class="cladcanAiSuccess">
            <div class="cladcanAiSuccessMark">✓</div>
            <h3>Question sent</h3>
            <p>Thank you. Your question has been sent to the CladCan team. We’ll follow up using the contact information you provided.</p>
            <button type="button" class="cladcanAiPrimary cladcanAiBackToMenu">Back to assistant</button>
          </div>`;
        body.querySelector(".cladcanAiBackToMenu")?.addEventListener("click", () => closeAI(panel));
      }
    }

    function openAI(panel) {
      closeAI(panel);
      panel.classList.add("cladcanAiOpen");
      const body = panel.querySelector(".chatBodyStructured") || panel.querySelector(".chatBody");
      if (!body) return;

      const screen = document.createElement("div");
      screen.className = "cladcanAiScreen";
      screen.innerHTML = `
        <div class="cladcanAiTopbar">
          <button type="button" class="cladcanAiBack" aria-label="Back to project assistant">← <span>Back</span></button>
          <span class="cladcanAiBadge">AI ASSISTANT</span>
        </div>
        <div class="cladcanAiBody">
          <div class="cladcanAiHero">
            <span class="cladcanAiEyebrow">ASK CLADCAN AI ✦</span>
            <h2>What would you like to know?</h2>
            <p>Ask about exterior systems, materials, services, project capabilities or how CladCan may be able to help with your project.</p>
          </div>
          <form class="cladcanAiQuestionForm">
            <label for="cladcan-ai-question">Your question</label>
            <textarea id="cladcan-ai-question" rows="4" maxlength="1200" required placeholder="e.g. What is the difference between ACM and aluminum siding?"></textarea>
            <button type="submit" class="cladcanAiPrimary">Ask CladCan AI</button>
          </form>
          <div class="cladcanAiComingSoon" hidden>
            <div class="cladcanAiAnswerIcon">✦</div>
            <div>
              <strong>AI answers are coming soon.</strong>
              <p>We’re preparing this assistant to answer from verified CladCan website content. Until the AI connection is enabled, you can send this question directly to our team.</p>
            </div>
          </div>
          <form class="cladcanAiContactForm" hidden>
            <input name="full_name" required placeholder="Full name" />
            <input name="email" type="email" required placeholder="Email" />
            <input name="phone" type="tel" inputmode="tel" required placeholder="Phone number" />
            <button type="submit" class="cladcanAiPrimary">Send Question to CladCan</button>
            <div class="cladcanAiValidation" aria-live="polite"></div>
          </form>
        </div>`;

      body.appendChild(screen);
      screen.querySelector(".cladcanAiBack")?.addEventListener("click", () => closeAI(panel));

      const qForm = screen.querySelector(".cladcanAiQuestionForm");
      const qArea = screen.querySelector("#cladcan-ai-question");
      const coming = screen.querySelector(".cladcanAiComingSoon");
      const contact = screen.querySelector(".cladcanAiContactForm");

      qForm?.addEventListener("submit", (event) => {
        event.preventDefault();
        if (!qArea?.value.trim()) return;
        coming.hidden = false;
        contact.hidden = false;
        qForm.querySelector("button")?.setAttribute("disabled", "disabled");
        qArea.setAttribute("readonly", "readonly");
      });

      contact?.addEventListener("submit", (event) => {
        event.preventDefault();
        const data = new FormData(contact);
        const fullName = String(data.get("full_name") || "").trim();
        const email = String(data.get("email") || "").trim();
        const phone = String(data.get("phone") || "").trim();
        const validation = contact.querySelector(".cladcanAiValidation");
        if (!fullName) {
          validation.textContent = "Please enter your name.";
          return;
        }
        if (!validEmail(email)) {
          validation.textContent = "Please enter a valid email address.";
          return;
        }
        if (!validPhone(phone)) {
          validation.textContent = "Please enter a valid 10-digit Canadian or US phone number.";
          return;
        }
        validation.textContent = "";
        submitQuestion(panel, qArea.value.trim(), fullName, email, phone);
      });
    }

    function enhance() {
      document.querySelectorAll(".chatPanel").forEach((panel) => {
        const menu = panel.querySelector(".mainMenuOptions");
        if (menu && !menu.querySelector(".cladcanAiMenuItem")) {
          const button = document.createElement("button");
          button.type = "button";
          button.className = "cladcanAiMenuItem";
          button.innerHTML = `<span class="cladcanAiMenuSpark">✦</span><span><strong>Ask CladCan AI</strong><small>Products, services & project questions</small></span><span class="cladcanAiMenuArrow">→</span>`;
          button.addEventListener("click", () => openAI(panel));
          menu.prepend(button);
        }
      });
    }

    enhance();
    const observer = new MutationObserver(enhance);
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  return null;
}
