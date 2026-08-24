"use client";

import { useEffect } from "react";

export default function ShowroomVisitLinkFix() {
  useEffect(() => {
    const handleClick = (event) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const link = target.closest('a[href="/contact/showroom-visit"]');
      if (!link) return;
      if (event.button !== undefined && event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      event.preventDefault();
      event.stopImmediatePropagation();
      window.location.href = "/contact/showroom-visit";
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  return null;
}
