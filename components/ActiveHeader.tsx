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
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        // pilih section yang paling dekat ke tengah layar
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
        root: null, // pakai scroll body
        rootMargin: "-40% 0px -50% 0px",
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
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <span className="text-sm font-bold tracking-tight">Portfolio</span>

        <nav className="w-full max-w-md">
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
        </nav>
      </div>
    </header>
  );
}