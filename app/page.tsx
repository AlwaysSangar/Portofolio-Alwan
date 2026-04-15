import Image from "next/image";
import AnimatedBackground from "@/components/AnimatedBackground";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import ActiveHeader from "@/components/ActiveHeader";
import { projects } from "@/data/projects";
import { FaWhatsapp, FaInstagram, FaEnvelope } from "react-icons/fa";

const PROFILE = {
  name: "Alwan Rafa Fadilah",
  major: "Rekayasa Perangkat Lunak",
  headline: "Mobile Developer | Front-End Developer",
  about:
     "Pelajar SMK jurusan Rekayasa Perangkat Lunak dengan spesialisasi pada Web dan Mobile Development. Terampil dalam membangun antarmuka web menggunakan HTML, CSS, dan JavaScript, serta memiliki keahlian dalam mengembangkan aplikasi mobile lintas platform menggunakan Flutter dan Dart. Saya adalah individu yang mampu bekerja secara kolaboratif dalam tim, memiliki kemampuan adaptasi yang cepat terhadap perkembangan teknologi, serta dedikasi tinggi untuk menghasilkan solusi digital yang inovatif dan fungsional.",
  experiences: [
    {
      title: "Membuat Mobile App - TokoBunga",
      time: "2025",
      desc: "Mengembangkan aplikasi e-commerce pemesanan bunga lintas platform menggunakan Flutter dan Dart.",
    },
    {
      title: "Membuat Mobile App - Jelajah Nusantara",
      time: "2025",
      desc: "Membangun aplikasi informasi pariwisata bertema kebudayaan Indonesia dengan Flutter..",
    },
    {
      title: "Web Desain",
      time: "2026",
      desc: "Merancang desain antarmuka (UI) dan pengalaman pengguna (UX) untuk platform blog/catatan harian digital.",
    },
  ],
  contacts: {
    whatsapp: "6285856470956",
    instagram: "reezzz08",
    email: "alwanrafa08@gmail.com",
  },
};

export default function Page() {
  return (
    <main className="relative h-[100dvh] overflow-hidden bg-slate-950 flex justify-center">
      <AnimatedBackground />

      {/* PHONE CONTAINER */}
      <div className="relative w-full max-w-[480px] h-[100dvh] bg-slate-900/50 backdrop-blur-sm shadow-2xl border-x border-white/10 overflow-hidden">
        {/* INI YANG SCROLL (biar feel mobile app) */}
        <div
          id="app-scroll"
          className="relative h-[100dvh] overflow-y-auto overscroll-contain"
        >
          <ActiveHeader />

          {/* HOME */}
          <section
            id="home"
            className="scroll-mt-40 relative flex min-h-[calc(100dvh-140px)] items-center justify-center px-6 pb-16 pt-10 text-center"
          >
            <Reveal>
              <div className="mx-auto mb-6 h-32 w-32 overflow-hidden rounded-full border-4 border-indigo-500/50 shadow-[0_0_20px_rgba(99,102,241,0.5)]">
                <div className="relative h-full w-full">
                  <Image
                    src="/me3.jpg"
                    alt="Foto profil"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              <h1 className="text-4xl font-extrabold tracking-tight">
                <span className="bg-gradient-to-r from-white via-indigo-300 to-white/70 bg-clip-text text-transparent">
                  PORTOFOLIO
                </span>
              </h1>

              <p className="mt-3 text-lg font-medium text-white/90">
                {PROFILE.name}
              </p>
              <p className="text-sm text-indigo-400 font-semibold uppercase tracking-widest">
                {PROFILE.major}
              </p>

              <div className="mt-6 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <p className="text-sm text-white/70 leading-relaxed">
                  {PROFILE.headline}
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-3">
                <a
                  href="#projects"
                  className="rounded-full bg-indigo-600 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-500/30 hover:bg-indigo-500 transition"
                >
                  Lihat Project
                </a>
                <a
                  href="#contact"
                  className="rounded-full border border-white/20 py-3 text-sm font-bold text-white hover:bg-white/10 transition"
                >
                  Kontak Saya
                </a>
              </div>
            </Reveal>
          </section>

          {/* PROFILE */}
          <section id="profile" className="scroll-mt-40 relative px-6 py-20">
            <Reveal>
              <h2 className="text-2xl font-bold mb-2">Profile</h2>
              <div className="h-1 w-12 bg-indigo-500 rounded-full mb-6" />
            </Reveal>

            <div className="space-y-6">
              <Reveal delay={0.1}>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-sm">
                  <h3 className="text-indigo-400 font-bold mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full" />{" "}
                    Tentang Saya
                  </h3>
                  <p className="text-sm leading-relaxed text-white/80">
                    {PROFILE.about}
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-sm">
                  <h3 className="text-indigo-400 font-bold mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full" />{" "}
                    Pengalaman
                  </h3>
                  <div className="space-y-4">
                    {PROFILE.experiences.map((ex, i) => (
                      <div
                        key={i}
                        className="relative pl-4 border-l-2 border-indigo-500/30 py-1"
                      >
                        <p className="text-sm font-bold text-white/90">
                          {ex.title}
                        </p>
                        <p className="text-[11px] text-white/50 mb-2">
                          {ex.time}
                        </p>
                        <p className="text-xs text-white/70 leading-relaxed">
                          {ex.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </section>

          {/* PROJECTS */}
          <section id="projects" className="scroll-mt-40 relative px-6 py-20">
            <Reveal>
              <h2 className="text-2xl font-bold mb-2">Project</h2>
              <div className="h-1 w-12 bg-indigo-500 rounded-full mb-6" />
            </Reveal>

            <div className="grid gap-6">
              {projects.slice(0, 4).map((p, i) => (
                <Reveal key={p.title} delay={i * 0.1}>
                  <ProjectCard p={p} />
                </Reveal>
              ))}
            </div>
          </section>

          {/* CONTACT */}
          <section id="contact" className="scroll-mt-40 relative px-6 py-20">
            <Reveal>
              <h2 className="text-2xl font-bold mb-2">Contact</h2>
              <div className="h-1 w-12 bg-indigo-500 rounded-full mb-6" />
            </Reveal>

            <div className="space-y-6">
              <Reveal delay={0.1}>
                <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-600/20 to-fuchsia-600/20 p-6 backdrop-blur-xl">
                  <h3 className="text-lg font-bold mb-2">Terima Kasih!</h3>
                  <p className="text-sm text-white/70 leading-relaxed">
                     Terima kasih telah meluangkan waktu untuk meninjau portofolio saya. Sebagai pelajar yang antusias di bidang Web & Mobile Development, saya sangat terbuka untuk kesempatan magang maupun kolaborasi proyek. Saya siap membawa semangat belajar dan kemampuan teknis saya ke dalam tim Anda.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="grid gap-3">
                  {[
                    {
                      icon: <FaWhatsapp />,
                      label: "WhatsApp",
                      val: `+${PROFILE.contacts.whatsapp}`,
                      href: `https://wa.me/${PROFILE.contacts.whatsapp}`,
                    },
                    {
                      icon: <FaInstagram />,
                      label: "Instagram",
                      val: `@${PROFILE.contacts.instagram}`,
                      href: `https://instagram.com/${PROFILE.contacts.instagram}`,
                    },
                    {
                      icon: <FaEnvelope />,
                      label: "Email",
                      val: PROFILE.contacts.email,
                      href: `mailto:${PROFILE.contacts.email}`,
                    },
                  ].map((item, i) => (
                    <a
                      key={i}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition group"
                    >
                      <div className="text-indigo-400 group-hover:scale-110 transition">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-[11px] text-white/50 font-medium uppercase">
                          {item.label}
                        </p>
                        <p className="text-sm font-semibold text-white/90">
                          {item.val}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </Reveal>
            </div>

            <div className="mt-12 text-center text-[10px] text-white/30 uppercase tracking-widest">
              © {new Date().getFullYear()} {PROFILE.name}
            </div>
          </section>

          {/* spacer bawah biar scroll terakhir enak */}
          <div className="h-10" />
        </div>
      </div>
    </main>
  );
}