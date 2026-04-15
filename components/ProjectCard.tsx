"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className="rounded-2xl bg-gradient-to-r from-indigo-500/40 via-cyan-400/25 to-fuchsia-500/35 p-[1px]"
    >
      <div className="rounded-2xl border border-white/10 bg-slate-950/55 p-5 backdrop-blur-xl">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-bold tracking-tight">{p.title}</h3>
        </div>

        {p.image ? (
          <div className="relative mt-4 aspect-[16/9] overflow-hidden rounded-xl border border-white/10">
            <Image src={p.image} alt={p.title} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
          </div>
        ) : null}

        <p className="mt-4 text-sm leading-relaxed text-white/75">{p.desc}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {p.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {p.github ? (
            <a
              href={p.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm hover:bg-white/10"
            >
              GitHub
            </a>
          ) : null}
          {p.demo ? (
            <a
              href={p.demo}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-white px-3 py-2 text-sm font-semibold text-slate-950 hover:bg-white/90"
            >
              Live Demo
            </a>
          ) : null}
        </div>
      </div>
    </motion.div>
  );
}