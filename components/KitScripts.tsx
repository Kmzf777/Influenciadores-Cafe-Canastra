"use client";

import { useEffect } from "react";

// Os scripts do kit de design (nav, hover, hero, momentos) mexem no DOM.
// Carregam só depois que o React hidratou a página, para um não atrapalhar o outro.
const scripts = ["/assets/system.js", "/assets/motion/motion.js", "/assets/layout/layout.js"];

export default function KitScripts() {
  useEffect(() => {
    if ((window as unknown as { __kit?: boolean }).__kit) return;
    (window as unknown as { __kit?: boolean }).__kit = true;
    for (const src of scripts) {
      const s = document.createElement("script");
      s.type = "module";
      s.src = src;
      document.body.appendChild(s);
    }
  }, []);
  return null;
}
