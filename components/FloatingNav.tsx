"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

const items = [
  { id: "home", label: "Home" },
  { id: "profile", label: "Profile" },
  { id: "projects", label: "Project" },
  { id: "contact", label: "Contact" },
];

export default function FloatingNav() {
  const [active, setActive] = useState("home");
  const ids = useMemo(() => items.map((i) => i.id), []);

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { threshold: [0.35, 0.55, 0.75] }
    );

    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [ids]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="fixed bottom-6 left-1/2 z-50 w-[92%] max-w-xl -translate-x-1/2">
      <div className="rounded-full border border-white/10 bg-white/10 p-2 backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.55)]">
        <div className="grid grid-cols-4 gap-2">
          {items.map((it) => {
            const isActive = it.id === active;
            return (
              <button
                key={it.id}
                onClick={() => scrollTo(it.id)}
                className="relative rounded-full px-3 py-2 text-sm font-semibold"
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-white"
                    transition={{ type: "spring", stiffness: 420, damping: 30 }}
                  />
                )}
                <span className={isActive ? "relative text-slate-950" : "relative text-white/80 hover:text-white"}>
                  {it.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}