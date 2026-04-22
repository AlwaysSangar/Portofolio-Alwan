"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <motion.div
      whileTap={{ scale: 0.98 }}
      className="rounded-3xl border border-white/10 bg-white/5 overflow-hidden backdrop-blur-sm"
    >
      {/* FRAME HP UNTUK SCREENSHOT FLUTTER */}
      {p.image && (
        <div className="relative flex justify-center bg-slate-900/60 pt-5 pb-2">
          <div className="relative w-[230px] md:w-[260px] rounded-[2.1rem] border-[6px] border-black/80 bg-black shadow-[0_20px_40px_rgba(0,0,0,0.7)] overflow-hidden">
            {/* notch / status bar kecil */}
            <div className="absolute inset-x-16 top-0 z-10 h-4 rounded-b-2xl bg-black/85" />

            <div className="relative mt-3 h-[420px] md:h-[460px] overflow-hidden rounded-[1.6rem] bg-black">
              <Image
                src={p.image}
                alt={p.title}
                fill
                // contain supaya seluruh UI Flutter kelihatan, tidak kepotong
                className="object-contain"
                sizes="260px"
              />
            </div>
          </div>
        </div>
      )}

      <div className="p-5">
        <h3 className="text-lg font-bold text-white mb-2">{p.title}</h3>
        <p className="text-xs leading-relaxed text-white/60 mb-4">
          {p.desc}
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          {p.tech.map((t) => (
            <span
              key={t}
              className="text-[10px] font-bold uppercase px-2 py-1 rounded-md bg-indigo-500/20 text-indigo-300 border border-indigo-500/30"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-2">
          {p.github && (
            <a
              href={p.github}
              target="_blank"
              className="flex-1 text-center py-2 rounded-xl border border-white/10 text-xs font-bold hover:bg-white/10 transition"
            >
              GitHub
            </a>
          )}
          {p.demo && (
            <a
              href={p.demo}
              target="_blank"
              className="flex-1 text-center py-2 rounded-xl bg-white text-slate-900 text-xs font-bold hover:bg-white/90 transition"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}