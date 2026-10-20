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
      src: "/images/hero-photo.jpg",
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
      src: "/images/about-photo.jpg",
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
      id: "nexus-analytics",
      number: "01",
      title: "Nexus Fintech & Crypto Analytics",
      description: "Platform analitik finansial real-time dengan visualisasi data kompleks berlatensi rendah.",
      thumbnail: "/images/project-crypto.jpg",
      status: "LIVE",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "WebSockets", "Highcharts"],
      rotation: "-1.5deg",
      caseStudy: {
        masalah: "Trader aktif membutuhkan dashboard pemantauan pasar real-time tanpa penurunan performa fps saat pergerakan harga tinggi.",
        peran: "Lead Frontend Engineer — merancang state pooling, modular widget charts, dan optimasi frame rate rendering.",
        proses: "Mengimplementasikan WebSocket pooling, debounced canvas updates, dan caching modular untuk 50+ pasangan mata uang kripto.",
        tools: "Next.js 16, TypeScript, Tailwind CSS, WebSockets, Highcharts, Zustand",
        hasil: "Latency dashboard berkurang 42%, Lighthouse score stabil 98, memproses hingga 10k data tick per detik dengan lancar.",
        liveUrl: "https://nexusanalytics.io",
        repoUrl: "https://github.com/justrifkyy/nexus-analytics",
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
