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
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { threshold: [0.4] }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [ids]);

  return (
    <div className="fixed z-[60] left-1/2 -translate-x-1/2 w-[calc(100%-32px)] max-w-[416px] px-4   bottom-[calc(1.25rem+env(safe-area-inset-bottom))]">
      <div className="rounded-full border border-white/10 bg-slate-900/80 p-2 backdrop-blur-2xl shadow-2xl">
        <div className="grid grid-cols-4 gap-1">
          {items.map((it) => {
            const isActive = it.id === active;
            return (
              <button
                key={it.id}
                onClick={() => document.getElementById(it.id)?.scrollIntoView({ behavior: "smooth" })}
                className="relative rounded-full py-2 text-[11px] font-bold uppercase tracking-tighter transition"
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-indigo-600"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className={isActive ? "relative text-white" : "relative text-white/50"}>
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