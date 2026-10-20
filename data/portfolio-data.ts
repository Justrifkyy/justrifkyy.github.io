export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  description: string;
  thumbnail: string;
  status: "LIVE" | "OPEN SOURCE" | "WIP";
  tags: string[];
  rotation: string;
  caseStudy: {
    masalah: string;
    peran: string;
    proses: string;
    tools: string;
    hasil: string;
    liveUrl: string;
    repoUrl: string;
  };
}

export interface SkillGroup {
  title: string;
  color: "primary" | "accentPink" | "accentBlue";
  items: string[];
}

export interface TimelineItem {
  period: string;
  title: string;
  org: string;
  summary: string;
}

export const portfolioData = {
  meta: {
    owner: "Muhammad Rifky",
    initials: "RF.",
    role: "Fullstack Developer & Creative Technologist",
    tagline: "Membangun sistem web tangguh dengan estetika tanpa kompromi.",
    language: "id",
    style: "neo-brutalism",
  },

  navbar: {
    logo: "RF.",
    links: [
      { label: "Proyek", href: "#projects" },
      { label: "Tentang", href: "#about" },
      { label: "Skill", href: "#skills" },
      { label: "Pengalaman", href: "#experience" },
      { label: "Kontak", href: "#contact" },
    ],
    ctaButton: {
      text: "DOWNLOAD CV",
      href: "/files/cv-rifky.pdf",
    },
  },

  hero: {
    eyebrow: "● TERSEDIA UNTUK KERJA / FREELANCE",
    headingLines: ["HALO, SAYA", "RIFKY", "FULLSTACK DEV."],
    typewriterSequence: [
      "Membangun aplikasi web performa tinggi.",
      1800,
      "Merancang arsitektur sistem yang rapi.",
      1800,
      "Mengubah ide kompleks jadi kode elegan.",
      1800,
    ],
    cta: [
      { text: "LIHAT PROYEK", href: "#projects", variant: "primary" as const },
      { text: "HUBUNGI SAYA", href: "#contact", variant: "outline" as const },
    ],
    photo: {
      src: "/images/hero-photo.png",
      alt: "Foto Muhammad Rifky",
      label: "FIG. 01 — RIFKY",
      circularText: "• DESAIN • KODE • KARYA • INOVASI ",
      stickerText: "OPEN TO WORK",
    },
  },

  marquee1: [
    "FULLSTACK DEV",
    "✱",
    "REACT & NEXT.JS",
    "✱",
    "CREATIVE TECH",
    "✱",
    "SYSTEM DESIGN",
    "✱",
    "SIAP KOLABORASI",
    "✱",
    "TYPESCRIPT",
    "✱",
  ],

  about: {
    heading: { label: "01 / TENTANG", text: "SIAPA SAYA?" },
    photo: {
      src: "/images/about-photo.png",
      alt: "Muhammad Rifky sedang bekerja di laptop",
      stickyNote: "☕ 4 Cangkir Kopi / Hari & Pecinta Web Cepat",
    },
    paragraphs: [
      "Saya adalah seorang Fullstack Developer yang berfokus menciptakan pengalaman web interaktif, performa tinggi, dan scalable. Dengan fondasi kuat di ekosistem modern TypeScript, Next.js, dan Tailwind CSS, saya membangun aplikasi dari perancangan arsitektur hingga deployment akhir.",
      "Bagi saya, web bukan sekadar deretan fungsi logika, melainkan medium kerajinan (craftsmanship) digital. Saya sangat menghargai kecepatan respon, tipografi tegas, aksesibilitas ramah pengguna, dan gaya neo-brutalism yang berani serta berkarakter kuat.",
    ],
    stats: [
      { value: 18, suffix: "+", label: "Proyek Selesai", color: "primary" as const },
      { value: 3, suffix: " Thn", label: "Pengalaman Kerja", color: "accentPink" as const },
      { value: 12, suffix: "+", label: "Sertifikasi & Badge", color: "accentBlue" as const },
    ],
  },

  projects: [
    {
      id: "information-perisai-system",
      number: "01",
      title: "InformationPerisai-System — UKM PERISAI UMI",
      description: "Platform digital terpadu Pusat Pengembangan Riset Mahasiswa Universitas Muslim Indonesia. Menggabungkan portal publik Dark Luxury & Scientific Prestige dengan CMS internal berkeamanan tinggi.",
      thumbnail: "/images/project-perisai.png",
      status: "LIVE",
      tags: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "Prisma ORM", "Turso / LibSQL"],
      rotation: "-1.5deg",
      caseStudy: {
        masalah: "Kebutuhan migrasi dari sistem legacy PHP/Laravel ke arsitektur web modern yang reaktif dan cepat, kebutuhan CMS mandiri bagi fungsionaris yang berganti tiap periode tanpa menyentuh kode sumber, serta shared database bersama sistem PSDM dengan zero-destruction policy.",
        peran: "Fullstack Web Developer / Software Engineer — merancang arsitektur portal publik, sistem otorisasi RBAC terpusat, CMS fungsionaris, dan integrasi basis data dual-driver.",
        proses: "Memisahkan rute (public) dengan SSR/ISR dan admin/(panel) terproteksi, merancang skema 21 tabel relasional (M_* & T_*) dengan Schema Guard (db/guard.mjs) untuk dual-driver (SQLite lokal & Turso LibSQL Cloud), sistem izin terpusat fungsi can(), serta kalkulasi status tenggat waktu dinamis zona WITA (UTC+8).",
        tools: "Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, Prisma ORM, SQLite / Turso (LibSQL), Zod",
        hasil: "Peningkatan performa tinggi & SEO (SSR/ISR), dashboard CMS mandiri untuk 42 fungsionaris aktif, integritas shared database terjaga 100% tanpa risiko destruktif, dan automasi kalkulasi deadline kompetisi riset.",
        liveUrl: "https://perisai-umi.com",
        repoUrl: "https://perisai-umi.com",
      },
    },
    {
      id: "neo-threads",
      number: "02",
      title: "Neo//Threads Brutalist Apparel",
      description: "Platform e-commerce apparel streetwear dengan micro-interactions neo-brutalisme dan checkout terpadu.",
      thumbnail: "/images/project-shop.jpg",
      status: "OPEN SOURCE",
      tags: ["React 19", "Next.js", "Tailwind v4", "Stripe API", "Motion"],
      rotation: "1.2deg",
      caseStudy: {
        masalah: "Brand fashion underground memerlukan toko online unik yang memecah kejenuhan tampilan template toko e-commerce pasaran.",
        peran: "Fullstack Architect — mendesain identitas visual neo-brutalist dan membangun arsitektur headless e-commerce.",
        proses: "Membangun sistem keranjang atomik, filter katalog instant dengan URL params, dan integrasi checkout Stripe yang mulus.",
        tools: "Next.js App Router, Tailwind CSS, Motion, Stripe API, Supabase",
        hasil: "Conversion rate meningkat 28% dan rata-rata waktu browsing pengguna meningkat 2.5x lipat dalam minggu pertama rilis.",
        liveUrl: "https://neothreads.store",
        repoUrl: "https://github.com/justrifkyy/neo-threads",
      },
    },
    {
      id: "prompt-verse",
      number: "03",
      title: "PromptVerse AI IDE Studio",
      description: "Developer workspace split-screen untuk pengujian, evaluasi, dan streaming orkestrasi prompt LLM.",
      thumbnail: "/images/project-aistudio.jpg",
      status: "WIP",
      tags: ["Next.js", "AI SDK", "Monaco Editor", "PostgreSQL", "Tailwind"],
      rotation: "-1deg",
      caseStudy: {
        masalah: "Developer AI kesulitan membandingkan respon berbagai LLM secara side-by-side dengan kalkulasi biaya token langsung.",
        peran: "Fullstack Developer — arsitektur backend streaming token dan UI editor split-screen fleksibel.",
        proses: "Menggabungkan Vercel AI SDK dengan Monaco Code Editor, multi-model streaming parallel, dan parser markdown interaktif.",
        tools: "Next.js 16, Vercel AI SDK, TypeScript, Monaco Editor, Tailwind CSS",
        hasil: "Telah digunakan oleh 350+ developer beta tester dengan skor kepuasan rata-rata 4.9/5 untuk workflow prototyping prompt.",
        liveUrl: "https://promptverse.dev",
        repoUrl: "https://github.com/justrifkyy/promptverse-ide",
      },
    },
  ] as ProjectItem[],

  marquee2: [
    "REACT",
    "✱",
    "NEXT.JS",
    "✱",
    "TYPESCRIPT",
    "✱",
    "TAILWIND CSS",
    "✱",
    "NODE.JS",
    "✱",
    "POSTGRESQL",
    "✱",
    "DOCKER",
    "✱",
    "GIT",
    "✱",
  ],

  skills: {
    heading: { label: "03 / SENJATA", text: "SKILL & TOOLS" },
    groups: [
      {
        title: "FRONTEND",
        color: "primary" as const,
        items: [
          "React 19",
          "Next.js (App Router)",
          "TypeScript",
          "Tailwind CSS v4",
          "Motion / Framer",
          "GSAP & ScrollTrigger",
          "HTML5 Semantic",
          "Responsive Layouts",
          "Web Performance (Core Web Vitals)",
        ],
      },
      {
        title: "DESAIN / KREATIF",
        color: "accentPink" as const,
        items: [
          "Figma & Design Tokens",
          "Neo-Brutalist Aesthetics",
          "Micro-Animations",
          "Design Systems",
          "Grid & Spatial Layouts",
          "Creative Direction",
          "User Centered UX",
        ],
      },
      {
        title: "BACKEND & TOOLS",
        color: "accentBlue" as const,
        items: [
          "Node.js / Express",
          "PostgreSQL & Prisma",
          "RESTful & GraphQL APIs",
          "Git & GitHub Actions",
          "Docker Containers",
          "Vercel & Supabase",
          "Turbopack & Vite",
        ],
      },
    ] as SkillGroup[],
  },

  experience: {
    heading: { label: "04 / JEJAK", text: "PENGALAMAN & PENDIDIKAN" },
    items: [
      {
        period: "2024 — SEKARANG",
        title: "Senior Fullstack Developer",
        org: "Tech Studio Nusantara",
        summary: "Memimpin arsitektur web modern, memandu tim engineering, dan merancang aplikasi web performa tinggi untuk klien enterprise.",
      },
      {
        period: "2022 — 2024",
        title: "Frontend Developer",
        org: "Digital Creative Lab",
        summary: "Mengembangkan berbagai landing page interaktif, dashboard SaaS, serta sistem desain modular berbasis Next.js.",
      },
      {
        period: "2020 — 2022",
        title: "Informatika / Software Engineering",
        org: "Universitas / Studi Independen",
        summary: "Mendalami struktur data, algoritma, rekayasa perangkat lunak, serta arsitektur web skala global.",
      },
    ] as TimelineItem[],
  },

  downloads: {
    heading: { label: "05 / BAWA PULANG", text: "UNDUH BERKAS" },
    items: [
      {
        title: "CV (ATS)",
        description: "Format ringkas, standar internasional, ramah pemindaian sistem ATS perusahaan.",
        file: "/files/cv-rifky.pdf",
        icon: "file-text" as const,
        color: "primary" as const,
        button: "DOWNLOAD CV",
      },
      {
        title: "PORTOFOLIO PDF",
        description: "Kumpulan karya terbaik, arsitektur sistem, dan detail studi kasus dalam satu berkas komprehensif.",
        file: "/files/portfolio-rifky.pdf",
        icon: "folder" as const,
        color: "accentPink" as const,
        button: "DOWNLOAD PORTOFOLIO",
      },
    ],
    note: "CV kreatif dan portofolio cetak resolusi tinggi siap dikirimkan melalui email jika diminta.",
  },

  contact: {
    heading: "MARI KERJA BARENG.",
    email: "justrifkyy@gmail.com",
    socials: [
      { label: "GITHUB", url: "https://github.com/justrifkyy" },
      { label: "LINKEDIN", url: "https://linkedin.com/in/justrifkyy" },
      { label: "INSTAGRAM", url: "https://instagram.com/justrifkyy" },
    ],
  },

  footer: {
    left: "© 2026 Muhammad Rifky",
    center: "Dibuat dengan Next.js, Tailwind & Passion.",
    right: "↑ KE ATAS",
  },
};
