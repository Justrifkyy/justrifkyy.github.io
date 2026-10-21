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

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  category: "Web" | "Mobile" | "Cloud" | "Software Eng" | "Architecture";
  credentialId: string;
  credentialUrl: string;
  badgeColor: "primary" | "accentPink" | "accentBlue";
}

export const portfolioData = {
  meta: {
    owner: "Muhammad Rifky Saputra Scania",
    initials: "RF.",
    role: "Software Engineer — Web, Mobile & Multi-Platform",
    tagline: "Merancang arsitektur perangkat lunak tangguh & reaktif: Web, Mobile, hingga Multi-Platform.",
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
      { label: "Sertifikat", href: "#certificates" },
      { label: "Kontak", href: "#contact" },
    ],
    ctaButton: {
      text: "DOWNLOAD CV",
      href: "/files/cv-rifky.pdf",
    },
  },

  hero: {
    eyebrow: "● TERSEDIA UNTUK KERJA / FREELANCE",
    headingLines: ["HALO, SAYA", "RIFKY", "SOFTWARE ENG."],
    disciplines: [
      { label: "WEB APPLICATIONS", color: "primary" },
      { label: "MOBILE (IOS & ANDROID)", color: "accentPink" },
      { label: "MULTI-PLATFORM", color: "accentBlue" },
    ],
    typewriterSequence: [
      "Software Engineer lintas platform.",
      1800,
      "Membangun aplikasi Web performa tinggi.",
      1800,
      "Mengembangkan aplikasi Mobile iOS & Android.",
      1800,
      "Merancang solusi Multi-Platform yang skalabel.",
      1800,
    ],
    cta: [
      { text: "LIHAT PROYEK", href: "#projects", variant: "primary" as const },
      { text: "HUBUNGI SAYA", href: "#contact", variant: "outline" as const },
    ],
    photo: {
      src: "/images/hero-photo.png",
      alt: "Foto Muhammad Rifky Saputra Scania",
      label: "FIG. 01 — RIFKY",
      circularText: "• DESAIN • KODE • KARYA • INOVASI ",
      stickerText: "OPEN TO WORK",
    },
  },

  marquee1: [
    "SOFTWARE ENGINEER",
    "✱",
    "WEB APPLICATIONS",
    "✱",
    "MOBILE APPS",
    "✱",
    "MULTI-PLATFORM",
    "✱",
    "SYSTEM DESIGN",
    "✱",
    "REACT & NEXT.JS",
    "✱",
    "FLUTTER & DART",
    "✱",
    "SIAP KOLABORASI",
    "✱",
  ],

  about: {
    heading: { label: "01 / TENTANG", text: "SIAPA SAYA?" },
    photo: {
      src: "/images/about-photo.png",
      alt: "Muhammad Rifky sedang bekerja di laptop",
      stickyNote: "📸 Programmer di depan layar, fotografer di balik lensa.",
    },
    paragraphs: [
      "Saya adalah seorang Software Engineer yang berfokus menciptakan pengalaman komputasi interaktif, performa tinggi, dan scalable di berbagai ranah: Web, Mobile (iOS/Android), maupun Multi-Platform. Dengan fondasi rekayasa perangkat lunak yang kokoh, saya merancang sistem dari arsitektur backend, pemodelan data, hingga antarmuka pengguna yang responsif.",
      "Bagi saya, perangkat lunak bukan sekadar deretan fungsi logika, melainkan sebuah kerajinan digital (craftsmanship). Saya sangat menghargai kecepatan respon eksekusi, kode yang bersih dan teruji (Clean Architecture), aksesibilitas ramah pengguna, serta estetika visual neo-brutalisme yang berani, lugas, dan fungsional.",
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
    {
      id: "agroscan-mobile",
      number: "04",
      title: "AgroScan Mobile — AI Plant Disease Detector",
      description: "Aplikasi mobile cerdas berbasis Flutter untuk deteksi dini penyakit tanaman pangan melalui kamera dan model machine learning on-device offline.",
      thumbnail: "/images/project-flutter.jpg",
      status: "LIVE",
      tags: ["Flutter", "Dart", "TensorFlow Lite", "SQLite Offline", "Clean Architecture"],
      rotation: "1.5deg",
      caseStudy: {
        masalah: "Petani di daerah agrikultur pelosok kesulitan mendiagnosis penyakit daun tanaman pangan secara cepat tanpa koneksi internet yang stabil di lapangan.",
        peran: "Mobile Software Engineer — merancang arsitektur Flutter, integrasi pipeline on-device machine learning, serta arsitektur database offline-first.",
        proses: "Mengintegrasikan TensorFlow Lite untuk inferensi langsung di perangkat (on-device ML), sinkronisasi data background saat sinyal internet pulih, serta optimasi rendering 60 FPS.",
        tools: "Flutter 3, Dart, TFLite, SQLite Offline-First, Bloc State Management, Camera API",
        hasil: "Diagnosis akurat 94.2% dalam waktu di bawah 0.4 detik tanpa internet sama sekali, telah diuji coba pada 3 kelompok tani lokal.",
        liveUrl: "https://github.com/justrifkyy",
        repoUrl: "https://github.com/justrifkyy/agroscan-mobile",
      },
    },
    {
      id: "fleettrack-pro",
      number: "05",
      title: "FleetTrack Pro — Cross-Platform Logistics System",
      description: "Sistem pelacakan armada logistik real-time terintegrasi untuk Web Dashboard dan Mobile Driver App dengan telemetri GPS berlatensi rendah.",
      thumbnail: "/images/project-multiplatform.jpg",
      status: "LIVE",
      tags: ["Multi-Platform", "React Native", "Next.js", "Go Backend", "WebSockets"],
      rotation: "-1.2deg",
      caseStudy: {
        masalah: "Perusahaan distribusi kesulitan mengoordinasikan rute armada darat secara real-time antara manajer operasional dan supir di lapangan.",
        peran: "Fullstack & Multi-Platform Engineer — merancang backend microservice Go berkecepatan tinggi, web dashboard manajer, serta aplikasi mobile supir.",
        proses: "Menerapkan streaming telemetri via WebSockets, background location tracking hemat baterai, dan visualisasi pemetaan rute berbasis Mapbox GL.",
        tools: "Next.js 16, React Native, Go (Golang), WebSockets, PostgreSQL, Mapbox GL",
        hasil: "Mengurangi deviasi rute pengiriman sebesar 35% dan menekan biaya konsumsi bahan bakar armada hingga 18% per bulan.",
        liveUrl: "https://github.com/justrifkyy",
        repoUrl: "https://github.com/justrifkyy/fleettrack-pro",
      },
    },
    {
      id: "makassar-creative-hub",
      number: "06",
      title: "Makassar Creative Hub — Open Directory Portal",
      description: "Direktori interaktif dan kalender kegiatan kolaboratif untuk pegiat industri kreatif, developer, dan komunitas teknologi di Indonesia Timur.",
      thumbnail: "/images/project-crypto.png",
      status: "OPEN SOURCE",
      tags: ["Next.js 16", "TypeScript", "Tailwind v4", "Supabase", "Open Source"],
      rotation: "0.8deg",
      caseStudy: {
        masalah: "Informasi acara komunitas kreatif dan tech meetup tersebar secara sporadis di berbagai media sosial tanpa wadah arsip dan pendaftaran terpusat.",
        peran: "Lead Maintainer & Fullstack Developer — memprakarsai proyek open-source, merancang identitas visual, dan membangun sistem portal.",
        proses: "Membangun sistem otentikasi Supabase, moderasi agenda crowdsourced, serta sistem integrasi kalender otomatis ke Google & Apple Calendar.",
        tools: "Next.js App Router, Supabase Auth & DB, Tailwind CSS v4, Lucide Icons",
        hasil: "Memfasilitasi 40+ event komunitas sepanjang tahun 2024 dan menghubungkan lebih dari 1,200 talenta kreatif aktif.",
        liveUrl: "https://github.com/justrifkyy",
        repoUrl: "https://github.com/justrifkyy/makassar-creative-hub",
      },
    },
  ] as ProjectItem[],

  marquee2: [
    "TYPESCRIPT",
    "✱",
    "NEXT.JS",
    "✱",
    "FLUTTER",
    "✱",
    "TAILWIND CSS",
    "✱",
    "REACT NATIVE",
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
        title: "WEB & BACKEND",
        color: "primary" as const,
        items: [
          "Next.js 16 (App Router)",
          "React 19",
          "TypeScript",
          "Tailwind CSS v4",
          "Node.js & Express",
          "PostgreSQL & Prisma ORM",
          "RESTful & GraphQL APIs",
          "WebSockets & Realtime",
          "Web Performance & SEO",
        ],
      },
      {
        title: "MOBILE & MULTI-PLATFORM",
        color: "accentPink" as const,
        items: [
          "Flutter & Dart",
          "React Native",
          "Android (Kotlin) Basics",
          "Cross-Platform Architecture",
          "Offline-First & SQLite",
          "State Management (Bloc / Zustand)",
          "Responsive Mobile UI/UX",
        ],
      },
      {
        title: "ENGINEERING & TOOLS",
        color: "accentBlue" as const,
        items: [
          "System Architecture & Design",
          "Git & GitHub Actions CI/CD",
          "Docker Containers",
          "Turso & Cloud Databases",
          "Clean Architecture & OOP",
          "Linux Shell & DevOps Basics",
          "Figma & Design Systems",
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
        title: "Frontend & Mobile Developer",
        org: "Digital Creative Lab",
        summary: "Mengembangkan berbagai aplikasi web interaktif, prototipe mobile cross-platform, serta sistem desain modular berbasis Next.js.",
      },
      {
        period: "2020 — 2022",
        title: "Informatika / Software Engineering",
        org: "Universitas / Studi Independen",
        summary: "Mendalami struktur data, algoritma, rekayasa perangkat lunak, serta arsitektur web & mobile skala global.",
      },
    ] as TimelineItem[],
  },

  certificates: {
    heading: { label: "05 / LISENSI", text: "SERTIFIKASI & KOMPETENSI" },
    description: "Kualifikasi resmi dan lisensi kompetensi di bidang Software Engineering (Web, Mobile Multi-Platform, dan Cloud Architecture).",
    items: [
      {
        id: "cert-flutter",
        title: "Belajar Membangun Aplikasi Multi-Platform (Flutter)",
        issuer: "Dicoding Indonesia / Google Authorized",
        year: "2024",
        category: "Mobile",
        credentialId: "DCD-FLUTTER-8921",
        credentialUrl: "https://www.dicoding.com",
        badgeColor: "accentPink",
      },
      {
        id: "cert-frontend-expert",
        title: "Menjadi Front-End Web Developer Expert",
        issuer: "Dicoding Indonesia",
        year: "2024",
        category: "Web",
        credentialId: "DCD-FE-EXPERT-7142",
        credentialUrl: "https://www.dicoding.com",
        badgeColor: "primary",
      },
      {
        id: "cert-bnsp",
        title: "Sertifikasi Profesi Junior Web Developer",
        issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
        year: "2023",
        category: "Software Eng",
        credentialId: "BNSP-TIK-09218",
        credentialUrl: "https://bnsp.go.id",
        badgeColor: "accentBlue",
      },
      {
        id: "cert-aws",
        title: "AWS Cloud Practitioner Essentials",
        issuer: "Amazon Web Services (AWS)",
        year: "2023",
        category: "Cloud",
        credentialId: "AWS-CP-883109",
        credentialUrl: "https://aws.amazon.com",
        badgeColor: "primary",
      },
      {
        id: "cert-solid",
        title: "Prinsip Pemrograman SOLID & Clean Architecture",
        issuer: "Dicoding Academy",
        year: "2024",
        category: "Architecture",
        credentialId: "DCD-SOLID-5501",
        credentialUrl: "https://www.dicoding.com",
        badgeColor: "accentPink",
      },
      {
        id: "cert-android",
        title: "Pengembangan Aplikasi Android Pemula & Menengah",
        issuer: "Google Developers / Dicoding",
        year: "2023",
        category: "Mobile",
        credentialId: "DCD-ANDR-34018",
        credentialUrl: "https://www.dicoding.com",
        badgeColor: "accentBlue",
      },
    ] as CertificateItem[],
  },

  downloads: {
    heading: { label: "06 / BAWA PULANG", text: "UNDUH BERKAS" },
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
    left: "© 2026 Muhammad Rifky Saputra Scania",
    center: "Dibuat dengan Next.js, Tailwind & Passion.",
    right: "↑ KE ATAS",
  },
};

