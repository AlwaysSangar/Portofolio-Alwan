"use client";

import { useEffect, useMemo, useState } from "react";

const items = [
  { id: "home", label: "Home" },
  { id: "profile", label: "Profile" },
  { id: "projects", label: "Project" },
  { id: "contact", label: "Contact" },
];

export default function ActiveHeader() {
  const [active, setActive] = useState("home");
  const ids = useMemo(() => items.map((i) => i.id), []);

  useEffect(() => {
    const root = document.getElementById("app-scroll"); // scroll container
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        // ambil yang paling dekat ke "atas" (di dalam rootMargin)
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) =>
              Math.abs(a.boundingClientRect.top) -
              Math.abs(b.boundingClientRect.top)
          )[0];

        if (visible?.target?.id) setActive(visible.target.id);
      },
      {
        root: root ?? null,
        // area aktif di sekitar tengah layar (biar pindah tabnya terasa natural)
        rootMargin: "-45% 0px -50% 0px",
        threshold: 0.01,
      }
    );

    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [ids]);

  const activeIndex = Math.max(0, items.findIndex((i) => i.id === active));

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-slate-950/55 backdrop-blur-xl">
        <div className="px-5 pt-4 pb-3">
          <div className="rounded-full border border-white/10 bg-white/5 p-1 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
            <div className="relative grid grid-cols-4">
              <span
                className="absolute left-0 top-0 h-full w-1/4 rounded-full bg-indigo-600 transition-transform duration-300"
                style={{ transform: `translateX(${activeIndex * 100}%)` }}
              />
              {items.map((it) => {
                const isActive = it.id === active;
                return (
                  <button
                    key={it.id}
                    onClick={() => scrollTo(it.id)}
                    className="relative z-10 rounded-full py-2 text-[11px] font-bold uppercase tracking-tight"
                  >
                    <span className={isActive ? "text-white" : "text-white/60"}>
                      {it.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
        <div className="h-px bg-white/10" />
      </div>
    </header>
  );
}