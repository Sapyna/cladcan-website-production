"use client";

import { useEffect } from "react";

const DASH_PATTERN = /\s*[\u2013\u2014]\s*/g;
const SKIP_TAGS = new Set(["SCRIPT", "STYLE", "NOSCRIPT", "CODE", "PRE", "TEXTAREA"]);

function normalizeText(root) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const nodes = [];

  while (walker.nextNode()) {
    nodes.push(walker.currentNode);
  }

  nodes.forEach((node) => {
    const parent = node.parentElement;

    if (!parent || SKIP_TAGS.has(parent.tagName)) {
      return;
    }

    const normalized = node.nodeValue.replace(DASH_PATTERN, " ");

    if (normalized !== node.nodeValue) {
      node.nodeValue = normalized;
    }
  });
}

export default function VisibleTextNormalizer() {
  useEffect(() => {
    normalizeText(document.body);

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.TEXT_NODE) {
            const parent = node.parentElement;
            if (parent && !SKIP_TAGS.has(parent.tagName)) {
              node.nodeValue = node.nodeValue.replace(DASH_PATTERN, " ");
            }
          } else if (node.nodeType === Node.ELEMENT_NODE) {
            normalizeText(node);
          }
        });
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
