"use client";

import { useEffect } from "react";

export default function ShowroomVisitLinkFix() {
  useEffect(() => {
    const handlePointerUp = (event) => {
      const link = event.target.closest('a[href="/contact/showroom-visit"]');
      if (!link) return;
      if (event.button !== undefined && event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      event.preventDefault();
      window.location.assign("/contact/showroom-visit");
    };

    document.addEventListener("pointerup", handlePointerUp, true);
    return () => document.removeEventListener("pointerup", handlePointerUp, true);
  }, []);

  return null;
}
