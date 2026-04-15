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
      {p.image && (
        <div className="relative aspect-video w-full overflow-hidden">
          <Image src={p.image} alt={p.title} fill className="object-cover" />
        </div>
      )}
      <div className="p-5">
        <h3 className="text-lg font-bold text-white mb-2">{p.title}</h3>
        <p className="text-xs leading-relaxed text-white/60 mb-4">{p.desc}</p>
        
        <div className="flex flex-wrap gap-2 mb-5">
          {p.tech.map((t) => (
            <span key={t} className="text-[10px] font-bold uppercase px-2 py-1 rounded-md bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-2">
          {p.github && (
            <a href={p.github} target="_blank" className="flex-1 text-center py-2 rounded-xl border border-white/10 text-xs font-bold hover:bg-white/10 transition">
              GitHub
            </a>
          )}
          {p.demo && (
            <a href={p.demo} target="_blank" className="flex-1 text-center py-2 rounded-xl bg-white text-slate-900 text-xs font-bold hover:bg-white/90 transition">
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}