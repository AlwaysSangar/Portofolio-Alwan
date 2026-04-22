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
      title: "Membuat Mobile App - Ruang Sehat",
      time: "2026",
      desc: "Aplikasi pemandu gaya hidup yang dirancang untuk membantu pengguna membangun kebiasaan sehat secara konsisten melalui pendekatan yang personal, ringan, dan interaktif.",
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
    <main className="relative min-h-screen bg-slate-950 text-white">
      <AnimatedBackground />
      <ActiveHeader />

      {/* HOME */}
      <section
        id="home"
        className="scroll-mt-28 relative border-b border-white/5"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:py-20 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          {/* FOTO - mobile di atas, desktop di kanan */}
          <Reveal>
            <div className="order-1 md:order-2 mx-auto w-full max-w-sm">
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <div className="mx-auto mb-4 h-40 w-40 overflow-hidden rounded-full border-4 border-indigo-500/50 shadow-[0_0_24px_rgba(99,102,241,0.45)]">
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
                <p className="text-center text-2xl font-extrabold tracking-tight">
                  <span className="bg-gradient-to-r from-white via-indigo-200 to-white/70 bg-clip-text text-transparent">
                    PORTOFOLIO
                  </span>
                </p>
                <p className="mt-2 text-center text-xs text-white/70">
                  Mobile Developer | Front-End Developer
                </p>
              </div>
            </div>
          </Reveal>

          {/* TEKS - mobile di bawah foto, desktop di kiri */}
          <Reveal>
            <div className="order-2 md:order-1 text-center md:text-left">
              <p className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/70">
                Portfolio Alwan Rafa
              </p>

              <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
                {PROFILE.name}
              </h1>

              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.25em] text-indigo-300/90">
                {PROFILE.major}
              </p>

              <p className="mt-4 text-sm text-white/80 leading-relaxed">
                {PROFILE.headline}
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
                <a
                  href="#projects"
                  className="rounded-2xl bg-indigo-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-500/30 hover:bg-indigo-500 transition"
                >
                  Lihat Project
                </a>
                <a
                  href="#contact"
                  className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-bold text-white hover:bg-white/10 transition"
                >
                  Kontak Saya
                </a>
              </div>

              <div className="mt-6 flex flex-wrap justify-center gap-2 md:justify-start">
                {["Flutter", "Dart", "Next.js", "UI/UX"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROFILE */}
      <section id="profile" className="scroll-mt-28 relative">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
          <Reveal>
            <h2 className="text-2xl font-bold sm:text-3xl">Profile</h2>
            <div className="mt-3 h-1 w-14 rounded-full bg-indigo-500" />
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Reveal delay={0.05}>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <h3 className="text-indigo-300 font-bold mb-3 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-indigo-500" />
                  Tentang Saya
                </h3>
                <p className="text-sm leading-relaxed text-white/80">
                  {PROFILE.about}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <h3 className="text-indigo-300 font-bold mb-4 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-indigo-500" />
                  Pengalaman
                </h3>
                <div className="space-y-4">
                  {PROFILE.experiences.map((ex, i) => (
                    <div
                      key={i}
                      className="rounded-2xl border border-white/10 bg-black/25 p-4"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <p className="text-sm font-bold text-white/90">
                          {ex.title}
                        </p>
                        <span className="text-xs text-white/55">
                          {ex.time}
                        </span>
                      </div>
                      <p className="mt-2 text-xs leading-relaxed text-white/75">
                        {ex.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="scroll-mt-28 relative">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
          <Reveal>
            <h2 className="text-2xl font-bold sm:text-3xl">Project</h2>
            <div className="mt-3 h-1 w-14 rounded-full bg-indigo-500" />
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {projects.slice(0, 5).map((p, i) => (
              <Reveal key={p.title} delay={i * 0.05}>
                <ProjectCard p={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="scroll-mt-28 relative">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
          <Reveal>
            <h2 className="text-2xl font-bold sm:text-3xl">Contact</h2>
            <div className="mt-3 h-1 w-14 rounded-full bg-indigo-500" />
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Reveal delay={0.05}>
              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-600/20 to-fuchsia-600/20 p-6 backdrop-blur-xl">
                <h3 className="text-lg font-bold mb-2">Terima Kasih!</h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  Terima kasih telah meluangkan waktu untuk meninjau portofolio
                  saya. Sebagai pelajar yang antusias di bidang Web & Mobile
                  Development, saya sangat terbuka untuk kesempatan magang
                  maupun kolaborasi proyek. Saya siap membawa semangat belajar
                  dan kemampuan teknis saya ke dalam tim Anda.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
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
                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition"
                  >
                    <div className="text-indigo-300">{item.icon}</div>
                    <div>
                      <p className="text-[11px] text-white/50 font-semibold uppercase">
                        {item.label}
                      </p>
                      <p className="text-sm font-bold text-white/90">
                        {item.val}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-white/40">
            © {new Date().getFullYear()} {PROFILE.name}
          </div>
        </div>
      </section>
    </main>
  );
}