import Image from "next/image";
import AnimatedBackground from "@/components/AnimatedBackground";
import FloatingNav from "@/components/FloatingNav";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard"
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
      title: " Membuat Mobile App - TokoBunga",
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
      time: "2025",
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
    <main className="relative min-h-screen">
      <AnimatedBackground />
      <FloatingNav />

      {/* HOME */}
      <section id="home" className="relative flex min-h-screen items-center justify-center px-4 pb-28 pt-16">
        <div className="mx-auto w-full max-w-4xl text-center">
          <Reveal>
            <div className="mx-auto mb-7 h-28 w-28 overflow-hidden rounded-full border-4 border-white/15 bg-white/5 sm:h-32 sm:w-32">
              <div className="relative h-full w-full">
                <Image src="/me.jpg" alt="Foto profil" fill className="object-cover" priority />
              </div>
            </div>

            <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl">
              <span className="bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
                PORTOFOLIO
              </span>
            </h1>

            <p className="mt-4 text-base text-white/85 sm:text-lg">{PROFILE.name}</p>
            <p className="text-sm text-white/60 sm:text-base">{PROFILE.major}</p>

            <p className="mt-5 text-sm font-medium text-white/75 sm:text-base">
              {PROFILE.headline}
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="#projects"
                className="rounded-2xl bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 hover:bg-white/90"
              >
                Lihat Project
              </a>
              <a
                href="#contact"
                className="rounded-2xl border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10"
              >
                Contact Saya
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROFILE */}
      <section id="profile" className="relative px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="text-2xl font-bold sm:text-3xl">Profile</h2>
            <p className="mt-2 max-w-2xl text-sm text-white/70 sm:text-base">
              Tentang saya dan pengalaman yang relevan.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Reveal delay={0.05}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <h3 className="text-lg font-semibold">Tentang Saya</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/80">{PROFILE.about}</p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <h3 className="text-lg font-semibold">Pengalaman</h3>
                <div className="mt-4 space-y-4">
                  {PROFILE.experiences.map((ex) => (
                    <div key={ex.title} className="rounded-xl border border-white/10 bg-black/20 p-4">
                      <div className="flex items-start justify-between gap-3">
                        <p className="font-semibold">{ex.title}</p>
                        <span className="text-xs text-white/60">{ex.time}</span>
                      </div>
                      <p className="mt-2 text-sm text-white/75">{ex.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="relative px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="text-2xl font-bold sm:text-3xl">Project</h2>
            <p className="mt-2 max-w-2xl text-sm text-white/70 sm:text-base">
              Projek yang pernah saya kerjakan.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {projects.slice(0, 4).map((p, i) => (
              <Reveal key={p.title} delay={0.05 + i * 0.05}>
                <ProjectCard p={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative px-4 pb-32 pt-16 sm:pt-20">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="text-2xl font-bold sm:text-3xl">Contact</h2>
            <p className="mt-2 max-w-2xl text-sm text-white/70 sm:text-base">
              Terima kasih sudah melihat portofolio saya.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Reveal delay={0.05}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <h3 className="text-lg font-semibold">Terima kasih sudah berkunjung!</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/80">
                  Terima kasih telah meluangkan waktu untuk meninjau portofolio saya. Sebagai pelajar yang antusias di bidang Web & Mobile Development, saya sangat terbuka untuk kesempatan magang maupun kolaborasi proyek. Saya siap membawa semangat belajar dan kemampuan teknis saya ke dalam tim Anda.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <h3 className="text-lg font-semibold">Kontak</h3>

                <div className="mt-4 grid gap-3">
                  <a
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/20 p-4 hover:bg-white/10"
                    href={`https://wa.me/${PROFILE.contacts.whatsapp}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaWhatsapp />
                    <div>
                      <p className="text-sm font-semibold">WhatsApp</p>
                      <p className="text-xs text-white/60">+{PROFILE.contacts.whatsapp}</p>
                    </div>
                  </a>

                  <a
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/20 p-4 hover:bg-white/10"
                    href={`https://instagram.com/${PROFILE.contacts.instagram}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaInstagram />
                    <div>
                      <p className="text-sm font-semibold">Instagram</p>
                      <p className="text-xs text-white/60">@{PROFILE.contacts.instagram}</p>
                    </div>
                  </a>

                  <a
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/20 p-4 hover:bg-white/10"
                    href={`mailto:${PROFILE.contacts.email}`}
                  >
                    <FaEnvelope />
                    <div>
                      <p className="text-sm font-semibold">Email</p>
                      <p className="text-xs text-white/60">{PROFILE.contacts.email}</p>
                    </div>
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/50">
            © {new Date().getFullYear()} {PROFILE.name}. Built with Next.js.
          </div>
        </div>
      </section>
    </main>
  );
}