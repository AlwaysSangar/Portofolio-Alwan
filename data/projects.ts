export type Project = {
  title: string;
  desc: string;
  tech: string[];
  image?: string; // "/p1.jpg"
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    title: "Project 1 — Gojek",
    desc: "Aplikasi landing page modern dan responsif yang dirancang untuk promosi Ojek Online dll. Fokus pada performa tinggi dan tampilan visual yang estetik untuk menarik minat calon pelanggan.",
    tech: ["Dart"],
    image: "/GojekMobile.png",
    github: "https://github.com/AlwaysSangar/TokoBunga.git",
  },
  {
    title: "Project 2 — Jelajah Nusantara",
    desc: "Sistem dashboard admin untuk manajemen data pariwisata. Menonjolkan kemampuan dalam menyusun layout yang rapi, penggunaan komponen reusable, serta penyajian data dalam bentuk tabel yang sistematis.",
    tech: ["Dart"],
    image: "/JelajahNusantaraMobile.png",
    github: "https://github.com/AlwaysSangar/JelajahNusantara.git",
  },
  {
    title: "Project 3 — TravelApp",
    desc: "Aplikasi Landing page untuk layanan perjalanan dengan section yang terstruktur dengan jelas. Dirancang untuk membangun kepercayaan pengguna melalui informasi layanan yang lengkap dan navigasi yang mudah.",
    tech: ["Dart"],
    image: "/TravelAppMobile.png",
    github: "https://github.com/AlwaysSangar/TravelApp.git",
  },
  {
    title: "Project 4 — TokoBunga",
    desc: "Aplikasi Landing page modern yang dirancang khusus untuk meningkatkan konversi penjualan produk bunga. Fokus utama proyek ini adalah pada estetika visual yang bersih dan performa aplikasi yang ringan.",
    tech: ["Dart"],
    image: "/TokoBungaMobile.png",
    github: "https://github.com/AlwaysSangar/TokoBunga.git",
  },
  {
    title: "Project 5 — Kyue",
    desc: "Landing page untuk toko kosmetik yang berfungsi sebagai representasi digital toko. Fokus pada pengenalan brand dan edukasi pelanggan mengenai produk serta layanan yang tersedia di toko tersebut.",
    tech: ["Next Js",],
    image: "/Kyue.png",
    github: "https://github.com/AlwaysSangar/KyueLanding.git",
  },
];