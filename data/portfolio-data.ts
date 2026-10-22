export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  description: string;
  thumbnail: string;
  status: "LIVE" | "OPEN SOURCE" | "WIP";
  tags: string[];
  rotation: string;
  category: "web" | "mobile" | "multiplatform";
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
  image: string;
}

export interface PortfolioData {
  meta: {
    owner: string;
    initials: string;
    role: string;
    tagline: string;
    language: string;
    style: string;
  };
  navbar: {
    logo: string;
    links: { label: string; href: string }[];
    ctaButton: { text: string; href: string };
  };
  hero: {
    headingLines: string[];
    disciplines: { label: string; color: "primary" | "accentPink" | "accentBlue" }[];
    typewriterSequence: (string | number)[];
    cta: { text: string; href: string; variant: "primary" | "outline" }[];
    photo: {
      src: string;
      alt: string;
      label: string;
      circularText: string;
      stickerText: string;
      badgeText: string;
    };
  };
  marquee1: string[];
  about: {
    heading: { label: string; text: string };
    photo: {
      src: string;
      alt: string;
      quoteText: string;
    };
    badges: string[];
    paragraphs: string[];
    stats: { value: number; suffix: string; label: string; color: "primary" | "accentPink" | "accentBlue" }[];
  };
  projects: {
    heading: { label: string; text: string };
    pageLabel: string;
    totalLabel: string;
    categoryLabels: {
      web: string;
      mobile: string;
      multiplatform: string;
    };
    prevButton: string;
    nextButton: string;
    caseStudyButton: string;
    demoButton: string;
    codeButton: string;
    modal: {
      title: string;
      problem: string;
      role: string;
      process: string;
      tools: string;
      result: string;
      visitLive: string;
      viewGithub: string;
      close: string;
    };
    items: ProjectItem[];
  };
  marquee2: string[];
  skills: {
    heading: { label: string; text: string };
    groups: SkillGroup[];
  };
  experience: {
    heading: { label: string; text: string };
    items: TimelineItem[];
  };
  certificates: {
    heading: { label: string; text: string };
    description: string;
    verifyButton: string;
    previewButton: string;
    items: CertificateItem[];
  };
  downloads: {
    heading: { label: string; text: string };
    items: {
      title: string;
      description: string;
      file: string;
      icon: "file-text" | "folder";
      color: "primary" | "accentPink";
      button: string;
    }[];
    note: string;
  };
  contact: {
    headingPart1: string;
    headingHighlight: string;
    headingPart2: string;
    email: string;
    form: {
      nameLabel: string;
      namePlaceholder: string;
      nameRequired: string;
      emailLabel: string;
      emailPlaceholder: string;
      emailRequired: string;
      emailInvalid: string;
      messageLabel: string;
      messagePlaceholder: string;
      messageRequired: string;
      messageMin: string;
      submitButton: string;
      submittingButton: string;
      successTitle: string;
      successMessage: string;
      resetButton: string;
    };
    directLabel: string;
    copyButton: string;
    copiedButton: string;
    socials: { label: string; url: string }[];
  };
  footer: {
    left: string;
    center: string;
    right: string;
  };
}

// -------------------------------------------------------------
// BAHASA INDONESIA (ID)
// -------------------------------------------------------------
export const portfolioDataId: PortfolioData = {
  meta: {
    owner: "Muhammad Rifky Saputra Scania",
    initials: "RF.",
    role: "Software Engineer — Web, Mobile & Multi-Platform",
    tagline: "Merancang perangkat lunak Web, Mobile (Android), dan sistem Multi-Platform.",
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
    headingLines: ["HALO, SAYA", "RIFKY", "SOFTWARE ENG."],
    disciplines: [
      { label: "WEB APPLICATIONS", color: "primary" },
      { label: "MOBILE (ANDROID)", color: "accentPink" },
      { label: "MULTI-PLATFORM", color: "accentBlue" },
    ],
    typewriterSequence: [
      "Software Engineer.",
      1800,
      "Membangun aplikasi Web performa tinggi.",
      1800,
      "Mengembangkan aplikasi Mobile Android dengan Flutter.",
      1800,
      "Merancang solusi Multi-Platform yang skalabel.",
      1800,
      "Eksplorasi Data Science, Machine Learning & Deep Learning.",
      1800,
    ],
    cta: [
      { text: "LIHAT PROYEK", href: "#projects", variant: "primary" },
      { text: "HUBUNGI SAYA", href: "#contact", variant: "outline" },
    ],
    photo: {
      src: "/images/hero-photo.png",
      alt: "Foto Muhammad Rifky Saputra Scania",
      label: "FIG. 01 — RIFKY",
      circularText: "• DESAIN • KODE • KARYA • INOVASI ",
      stickerText: "OPEN TO WORK",
      badgeText: "★ VERIFIED DEV ★",
    },
  },

  marquee1: [
    "SOFTWARE ENGINEER",
    "✱",
    "WEB APPLICATIONS",
    "✱",
    "MOBILE ANDROID",
    "✱",
    "FLUTTER & DART",
    "✱",
    "MULTI-PLATFORM",
    "✱",
    "NEXT.JS & REACT",
    "✱",
    "TAILWIND CSS",
    "✱",
    "CLEAN ARCHITECTURE",
    "✱",
  ],

  about: {
    heading: { label: "01 / TENTANG SAYA", text: "KODE, SISTEM & DATA." },
    photo: {
      src: "/images/about-photo.png",
      alt: "Muhammad Rifky sedang bekerja di laptop",
      quoteText: '“I hate when people said "It works on my machine"”',
    },
    badges: [
      "SOFTWARE ENGINEERING",
      "FLUTTER & ANDROID",
      "DATA SCIENCE & ML/DL",
    ],
    paragraphs: [
      "Halo! Saya Muhammad Rifky, mahasiswa Teknik Informatika di Universitas Muslim Indonesia (semester 7) yang berfokus pada bidang Software Engineering. Saya aktif mengembangkan aplikasi Web, Mobile (Android), dan sistem Multi-Platform.",
      "Selain rekayasa perangkat lunak, saya juga memiliki ketertarikan mendalam di bidang Data Science, Machine Learning (ML), dan Deep Learning (DL). Saya senang mengeksplorasi analisis data, melatih model cerdas, serta mengintegrasikan kapabilitas AI ke dalam solusi perangkat lunak yang fungsional.",
    ],
    stats: [
      { value: 9, suffix: "+", label: "Proyek Pilihan", color: "primary" },
      { value: 7, suffix: " Sem", label: "Teknik Informatika", color: "accentPink" },
      { value: 6, suffix: "+", label: "Sertifikasi Resmi", color: "accentBlue" },
    ],
  },

  projects: {
    heading: { label: "02 / KARYA", text: "PROYEK PILIHAN" },
    pageLabel: "BAGIAN",
    totalLabel: "TOTAL PROYEK",
    categoryLabels: {
      web: "01 / WEB DEVELOPMENT",
      mobile: "02 / MOBILE (ANDROID)",
      multiplatform: "03 / MULTI-PLATFORM",
    },
    prevButton: "SEBELUMNYA",
    nextButton: "SELANJUTNYA",
    caseStudyButton: "STUDI KASUS",
    demoButton: "LIHAT DEMO",
    codeButton: "KODE SUMBER",
    modal: {
      title: "STUDI KASUS PROYEK",
      problem: "01 / MASALAH & TANTANGAN",
      role: "02 / PERAN REKAYASA",
      process: "03 / PROSES TEKNIS",
      tools: "04 / TOOLS & STACK",
      result: "05 / HASIL & DAMPAK",
      visitLive: "KUNJUNGI PROYEK LIVE",
      viewGithub: "GITHUB REPOSITORY",
      close: "TUTUP STUDI KASUS",
    },
    items: [
      // ==========================================
      // BAGIAN 1: WEB DEVELOPMENT (3 DISPLAY)
      // ==========================================
      {
        id: "information-perisai-system",
        number: "01",
        title: "InformationPerisai-System — UKM PERISAI UMI",
        description: "Platform digital terpadu Pusat Pengembangan Riset Mahasiswa Universitas Muslim Indonesia. Menggabungkan portal publik Dark Luxury & Scientific Prestige dengan CMS internal berkeamanan tinggi.",
        thumbnail: "/images/project-perisai.png",
        status: "LIVE",
        category: "web",
        tags: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "Prisma ORM", "Turso / LibSQL"],
        rotation: "-1.2deg",
        caseStudy: {
          masalah: "Kebutuhan migrasi dari sistem legacy PHP/Laravel ke arsitektur web modern yang reaktif dan cepat, kebutuhan CMS mandiri bagi fungsionaris yang berganti tiap periode tanpa menyentuh kode sumber, serta shared database bersama sistem PSDM dengan zero-destruction policy.",
          peran: "Fullstack Web Developer / Software Engineer — merancang arsitektur portal publik, sistem otorisasi RBAC terpusat, CMS fungsionaris, dan integrasi basis data dual-driver.",
          proses: "Memisahkan rute public dengan SSR/ISR dan admin panel terproteksi, merancang skema 21 tabel relasional dengan Schema Guard untuk dual-driver (SQLite lokal & Turso LibSQL Cloud), sistem izin terpusat fungsi can(), serta kalkulasi status deadline kompetisi riset zona WITA.",
          tools: "Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, Prisma ORM, SQLite / Turso (LibSQL), Zod",
          hasil: "Peningkatan performa tinggi & SEO (SSR/ISR), dashboard CMS mandiri untuk 42 fungsionaris aktif, integritas shared database terjaga 100%, dan automasi pelacakan kompetisi riset.",
          liveUrl: "https://perisai-umi.com",
          repoUrl: "https://github.com/Justrifkyy",
        },
      },
      {
        id: "neo-threads",
        number: "02",
        title: "Neo//Threads Brutalist Apparel",
        description: "Platform e-commerce apparel streetwear dengan micro-interactions neo-brutalisme, katalog dinamis, dan checkout terpadu.",
        thumbnail: "/images/project-shop.jpg",
        status: "OPEN SOURCE",
        category: "web",
        tags: ["React 19", "Next.js", "Tailwind CSS", "Stripe API", "Motion"],
        rotation: "1.2deg",
        caseStudy: {
          masalah: "Brand fashion streetwear independen memerlukan toko daring yang berani, mencolok, dan memecah kejenuhan template e-commerce pasaran.",
          peran: "Fullstack Architect — mendesain identitas visual neo-brutalist dan membangun arsitektur headless e-commerce.",
          proses: "Membangun manajemen keranjang belanja atomik, filter katalog instan berbasis parameter URL, dan integrasi checkout Stripe yang aman.",
          tools: "Next.js App Router, Tailwind CSS, Motion, Stripe API, Supabase",
          hasil: "Conversion rate meningkat 28% dan rata-rata waktu browsing pengguna meningkat 2.5x lipat saat peluncuran koleksi perdana.",
          liveUrl: "https://neothreads.store",
          repoUrl: "https://github.com/Justrifkyy/neo-threads",
        },
      },
      {
        id: "prompt-verse",
        number: "03",
        title: "PromptVerse AI Studio",
        description: "Developer workspace split-screen untuk pengujian, evaluasi, dan streaming orkestrasi prompt LLM secara real-time.",
        thumbnail: "/images/project-aistudio.jpg",
        status: "WIP",
        category: "web",
        tags: ["Next.js", "AI SDK", "Monaco Editor", "PostgreSQL", "Tailwind"],
        rotation: "-0.8deg",
        caseStudy: {
          masalah: "Developer dan engineer AI kesulitan membandingkan respon berbagai model bahasa besar (LLM) secara berdampingan dengan kalkulasi biaya token real-time.",
          peran: "Fullstack Developer — arsitektur backend streaming token dan antarmuka split-screen editor kode.",
          proses: "Menggabungkan Vercel AI SDK dengan Monaco Code Editor, multi-model streaming parallel, dan parser markdown interaktif.",
          tools: "Next.js 16, Vercel AI SDK, TypeScript, Monaco Editor, Tailwind CSS",
          hasil: "Digunakan oleh 350+ developer beta tester dengan kepuasan tinggi dalam mempercepat proses prototyping prompt AI.",
          liveUrl: "https://promptverse.dev",
          repoUrl: "https://github.com/Justrifkyy/promptverse-ide",
        },
      },

      // ==========================================
      // BAGIAN 2: MOBILE APPS (ANDROID / FLUTTER) (3 DISPLAY)
      // ==========================================
      {
        id: "agroscan-mobile",
        number: "04",
        title: "AgroScan Mobile — AI Plant Disease Detector",
        description: "Aplikasi mobile Android berbasis Flutter untuk deteksi dini penyakit daun tanaman pangan melalui kamera dan machine learning on-device offline.",
        thumbnail: "/images/project-flutter.jpg",
        status: "LIVE",
        category: "mobile",
        tags: ["Flutter", "Dart", "Android", "TensorFlow Lite", "SQLite Offline"],
        rotation: "-1.2deg",
        caseStudy: {
          masalah: "Petani di daerah agrikultur pedesaan kesulitan mendiagnosis penyakit daun tanaman secara cepat tanpa koneksi internet yang stabil di lapangan.",
          peran: "Mobile Software Engineer — merancang arsitektur Flutter, integrasi pipeline machine learning on-device, dan arsitektur database offline-first.",
          proses: "Mengintegrasikan model TensorFlow Lite untuk inferensi langsung di perangkat tanpa kuota internet, sinkronisasi background saat internet pulih, serta optimasi rendering 60 FPS.",
          tools: "Flutter 3, Dart, TensorFlow Lite, SQLite Offline-First, Bloc State Management, Camera API",
          hasil: "Diagnosis akurat 94.2% dalam waktu di bawah 0.4 detik secara offline, telah diuji coba pada 3 kelompok tani lokal.",
          liveUrl: "https://github.com/Justrifkyy",
          repoUrl: "https://github.com/Justrifkyy/agroscan-mobile",
        },
      },
      {
        id: "karsapay-mobile",
        number: "05",
        title: "KarsaPay Mobile — Digital Wallet & QRIS Android",
        description: "Aplikasi dompet digital & pencatatan transaksi merchant UMKM berbasis Android dengan scanner QRIS instan dan audit saldo real-time.",
        thumbnail: "/images/project-karsapay.jpg",
        status: "LIVE",
        category: "mobile",
        tags: ["Flutter", "Dart", "Android", "QRIS Scanner", "Bloc", "Local Auth"],
        rotation: "1deg",
        caseStudy: {
          masalah: "Pedagang UMKM lokal membutuhkan aplikasi kasir dan dompet digital yang ringan, tidak lemot di smartphone Android entry-level, dan mendukung transaksi QRIS cepat.",
          peran: "Mobile Developer — merancang UI/UX neo-brutalist dengan kontras tinggi, arsitektur state management Bloc, dan integrasi modul kamera barcode/QRIS.",
          proses: "Membangun scanner QR berkecepatan tinggi, penyimpanan kredensial aman dengan Flutter Secure Storage, autentikasi biometrik fingerprint, serta riwayat mutasi instan.",
          tools: "Flutter 3, Dart, Mobile Scanner, Bloc State Management, Secure Storage, Biometric API",
          hasil: "Waktu scanning QRIS di bawah 200ms, ukuran instalasi APK ringan (<18 MB), dan antarmuka ramah pengguna bagi pelaku usaha mikro.",
          liveUrl: "https://github.com/Justrifkyy",
          repoUrl: "https://github.com/Justrifkyy/karsapay-mobile",
        },
      },
      {
        id: "yukngaji-android",
        number: "06",
        title: "YukNgaji Android — Al-Quran & Daily Habit Tracker",
        description: "Aplikasi Android pembacaan Al-Quran digital offline, penanda tilawah harian, audio murottal, dan pengingat waktu sholat terintegrasi waktu lokal.",
        thumbnail: "/images/project-yukngaji.jpg",
        status: "OPEN SOURCE",
        category: "mobile",
        tags: ["Flutter", "Dart", "Android", "Hive DB", "Audio Player", "Clean Arch"],
        rotation: "-0.8deg",
        caseStudy: {
          masalah: "Banyak aplikasi religi mobile yang penuh iklan mengganggu, boros baterai, dan tidak dapat digunakan ketika berada di luar jangkauan jaringan internet.",
          peran: "Mobile Software Engineer — merancang arsitektur Clean Architecture, integrasi audio murottal berlatensi rendah, dan database lokal Al-Quran 30 Juz.",
          proses: "Menggunakan database NoSQL Hive untuk loading teks ayat instan 0ms, audio caching background, kalkulasi waktu sholat berbasis koordinat GPS perangkat, dan penanda streak tilawah.",
          tools: "Flutter, Dart, Hive Local Database, Just Audio, Geolocation, Clean Architecture",
          hasil: "100% bebas iklan mengganggu, konsumsi memori RAM di bawah 65MB, dan performa scrolling mushaf sangat halus di berbagai tipe perangkat Android.",
          liveUrl: "https://github.com/Justrifkyy",
          repoUrl: "https://github.com/Justrifkyy/yukngaji-android",
        },
      },

      // ==========================================
      // BAGIAN 3: MULTI-PLATFORM (3 DISPLAY)
      // ==========================================
      {
        id: "fleettrack-pro",
        number: "07",
        title: "FleetTrack Pro — Cross-Platform Logistics System",
        description: "Sistem pelacakan armada logistik real-time terintegrasi untuk Web Dashboard Operasional dan Mobile Driver App Android dengan telemetri GPS berlatensi rendah.",
        thumbnail: "/images/project-multiplatform.jpg",
        status: "LIVE",
        category: "multiplatform",
        tags: ["Multi-Platform", "Flutter Android", "Next.js 16", "Go Backend", "WebSockets"],
        rotation: "-1.2deg",
        caseStudy: {
          masalah: "Perusahaan distribusi kesulitan mengoordinasikan rute armada darat secara real-time antara manajer operasional di kantor dan supir di jalan.",
          peran: "Fullstack & Multi-Platform Engineer — merancang backend microservice Go berkecepatan tinggi, web dashboard manajer, serta aplikasi mobile supir Android.",
          proses: "Menerapkan streaming telemetri via WebSockets, background location tracking hemat baterai pada Android, dan visualisasi pemetaan rute berbasis Mapbox GL di Web.",
          tools: "Next.js 16, Flutter (Android), Go (Golang), WebSockets, PostgreSQL, Mapbox GL",
          hasil: "Mengurangi deviasi rute pengiriman sebesar 35% dan menekan biaya konsumsi bahan bakar armada hingga 18% per bulan.",
          liveUrl: "https://github.com/Justrifkyy",
          repoUrl: "https://github.com/Justrifkyy/fleettrack-pro",
        },
      },
      {
        id: "makassar-creative-hub",
        number: "08",
        title: "Makassar Creative Hub — Open Directory & Event Portal",
        description: "Direktori interaktif dan kalender kegiatan kolaboratif untuk pegiat industri kreatif, developer, dan komunitas teknologi di Indonesia Timur.",
        thumbnail: "/images/project-makassarhub.jpg",
        status: "OPEN SOURCE",
        category: "multiplatform",
        tags: ["Multi-Platform", "Next.js 16", "Flutter Android", "Supabase", "Open Source"],
        rotation: "1deg",
        caseStudy: {
          masalah: "Informasi acara komunitas kreatif dan tech meetup di Makassar tersebar sporadis di media sosial tanpa arsip terpusat dan pendaftaran yang rapi.",
          peran: "Lead Maintainer & Software Engineer — memprakarsai proyek open-source, merancang identitas visual, dan membangun portal web serta aplikasi mobile companion.",
          proses: "Membangun sistem otentikasi Supabase, moderasi agenda crowdsourced, sinkronisasi kalender ke Google & Apple Calendar, serta notifikasi jadwal kegiatan.",
          tools: "Next.js App Router, Flutter Android, Supabase Auth & DB, Tailwind CSS v4, Lucide Icons",
          hasil: "Memfasilitasi 40+ event komunitas sepanjang tahun dan menghubungkan lebih dari 1,200 talenta kreatif serta developer aktif.",
          liveUrl: "https://github.com/Justrifkyy",
          repoUrl: "https://github.com/Justrifkyy/makassar-creative-hub",
        },
      },
      {
        id: "devpulse-multiplatform",
        number: "09",
        title: "DevPulse — Desktop & Mobile System Monitor",
        description: "Aplikasi monitoring performa server, container Docker, dan metrik aplikasi secara real-time untuk Flutter Desktop (Windows/Linux) dan Flutter Android.",
        thumbnail: "/images/project-devpulse.jpg",
        status: "LIVE",
        category: "multiplatform",
        tags: ["Multi-Platform", "Flutter Desktop", "Flutter Android", "Rust Core", "WebSockets"],
        rotation: "-0.8deg",
        caseStudy: {
          masalah: "Developer dan sysadmin sering kali harus membuka banyak terminal terpisah untuk memeriksa utilitas CPU, RAM, container Docker, dan latency API server jarak jauh.",
          peran: "Multi-Platform Software Engineer — merancang arsitektur aplikasi lintas platform untuk desktop Windows dan Android menggunakan satu basis kode Flutter.",
          proses: "Menghubungkan core telemetry agent via streaming WebSockets terenkripsi, visualisasi grafik performa interaktif, dan notifikasi peringatan ambang batas server down.",
          tools: "Flutter 3 (Desktop & Mobile), Dart, Rust Telemetry Agent, WebSockets, Secure Channels",
          hasil: "Satu codebase untuk Desktop dan Mobile, footprint memori sangat rendah (<40MB di background), dan latency pembaruan metrik <50ms.",
          liveUrl: "https://github.com/Justrifkyy",
          repoUrl: "https://github.com/Justrifkyy/devpulse-monitor",
        },
      },
    ],
  },

  marquee2: [
    "TYPESCRIPT",
    "✱",
    "NEXT.JS 16",
    "✱",
    "FLUTTER & DART",
    "✱",
    "TAILWIND CSS V4",
    "✱",
    "ANDROID",
    "✱",
    "NODE.JS",
    "✱",
    "POSTGRESQL",
    "✱",
    "DOCKER",
    "✱",
    "CLEAN ARCHITECTURE",
    "✱",
  ],

  skills: {
    heading: { label: "03 / SENJATA", text: "SKILL & TOOLS" },
    groups: [
      {
        title: "WEB & BACKEND",
        color: "primary",
        items: [
          "Next.js 16 (App Router)",
          "React 19",
          "TypeScript",
          "Tailwind CSS v4",
          "Node.js & Express",
          "PostgreSQL & Prisma ORM",
          "RESTful APIs",
          "WebSockets & Realtime",
          "Web Performance & SEO",
        ],
      },
      {
        title: "MOBILE (ANDROID)",
        color: "accentPink",
        items: [
          "Flutter & Dart",
          "Android App Development",
          "Offline-First & SQLite",
          "State Management (Bloc / Provider)",
          "REST API Integration",
          "Local Auth & QR Scanner",
          "Responsive Mobile UI/UX",
        ],
      },
      {
        title: "MULTI-PLATFORM & DATA TOOLS",
        color: "accentBlue",
        items: [
          "Cross-Platform System Architecture",
          "Python & Data Science",
          "Machine Learning & Deep Learning",
          "TensorFlow Lite & AI Models",
          "Git & GitHub Actions CI/CD",
          "Docker Containers",
          "Turso & Cloud Databases",
          "Clean Architecture",
          "Linux Shell & Troubleshooting",
        ],
      },
    ],
  },

  experience: {
    heading: { label: "04 / JEJAK", text: "PENGALAMAN & PENDIDIKAN" },
    items: [
      {
        period: "2023 — SEKARANG (2026)",
        title: "S1 Teknik Informatika (Semester 7)",
        org: "Universitas Muslim Indonesia (UMI)",
        summary: "Mendalami Software Engineering, struktur data, dan rekayasa perangkat lunak. Aktif membangun platform digital InformationPerisai-System untuk UKM PERISAI UMI serta berbagai aplikasi Web dan Mobile Android.",
      },
      {
        period: "2022",
        title: "Praktik Kerja Lapangan (PKL) / IT Support",
        org: "MD Komputer Maros",
        summary: "Menangani perbaikan hardware & software komputer, instalasi sistem operasi, perakitan PC, konfigurasi jaringan lokal (LAN), serta pelayanan teknis perangkat konsumen.",
      },
      {
        period: "2019 — 2022",
        title: "Teknik Komputer dan Jaringan (TKJ)",
        org: "SMK Kebangsaan Indonesia Maros",
        summary: "Mempelajari dasar rekayasa jaringan komputer dan pemrograman. Berperan aktif sebagai Asisten Lab Pemrograman dan IT Support sekolah dalam pemeliharaan lab komputer serta pendampingan praktikum siswa.",
      },
    ],
  },

  certificates: {
    heading: { label: "05 / LISENSI", text: "SERTIFIKASI & KOMPETENSI" },
    description: "Kualifikasi resmi dan lisensi kompetensi di bidang Software Engineering (Web, Mobile Android, dan Cloud Architecture). Klik untuk melihat sertifikat.",
    verifyButton: "VERIFIKASI RESMI",
    previewButton: "LIHAT SERTIFIKAT",
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
        image: "/images/cert-flutter.jpg",
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
        image: "/images/cert-frontend.jpg",
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
        image: "/images/cert-bnsp.jpg",
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
        image: "/images/cert-aws.jpg",
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
        image: "/images/cert-solid.jpg",
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
        image: "/images/cert-android.jpg",
      },
    ],
  },

  downloads: {
    heading: { label: "06 / BAWA PULANG", text: "UNDUH BERKAS" },
    items: [
      {
        title: "CV (ATS)",
        description: "Format ringkas, standar internasional, ramah pemindaian sistem ATS perusahaan.",
        file: "/files/cv-rifky.pdf",
        icon: "file-text",
        color: "primary",
        button: "DOWNLOAD CV",
      },
      {
        title: "PORTOFOLIO PDF",
        description: "Kumpulan karya terbaik, arsitektur sistem, dan detail studi kasus dalam satu berkas komprehensif.",
        file: "/files/portfolio-rifky.pdf",
        icon: "folder",
        color: "accentPink",
        button: "DOWNLOAD PORTOFOLIO",
      },
    ],
    note: "CV dan dokumen portofolio siap dikirimkan melalui email jika dibutuhkan.",
  },

  contact: {
    headingPart1: "MARI ",
    headingHighlight: "KERJA",
    headingPart2: " BARENG.",
    email: "rifky020504@gmail.com",
    form: {
      nameLabel: "NAMA LENGKAP *",
      namePlaceholder: "Masukkan nama Anda",
      nameRequired: "Nama tidak boleh kosong",
      emailLabel: "EMAIL AKTIF *",
      emailPlaceholder: "nama@domain.com",
      emailRequired: "Email tidak boleh kosong",
      emailInvalid: "Format email tidak valid",
      messageLabel: "PESAN / DETAIL PROYEK *",
      messagePlaceholder: "Ceritakan proyek atau ide yang ingin Anda diskusikan...",
      messageRequired: "Pesan tidak boleh kosong",
      messageMin: "Pesan minimal 10 karakter",
      submitButton: "KIRIM PESAN SEKARANG",
      submittingButton: "MENGIRIM PESAN...",
      successTitle: "★ PESAN BERHASIL TERKIRIM! ★",
      successMessage: "Terima kasih! Saya akan membalas pesan Anda sesegera mungkin.",
      resetButton: "KIRIM PESAN LAIN",
    },
    directLabel: "HUBUNGI LANGSUNG VIA EMAIL:",
    copyButton: "SALIN EMAIL",
    copiedButton: "EMAIL DISALIN!",
    socials: [
      { label: "GITHUB", url: "https://github.com/Justrifkyy" },
      { label: "LINKEDIN", url: "https://www.linkedin.com/in/muh-rifky-saputra-scania" },
      { label: "INSTAGRAM", url: "https://www.instagram.com/justrifkyy_" },
    ],
  },

  footer: {
    left: "© 2026 Muhammad Rifky Saputra Scania",
    center: "Dibuat dengan Next.js, Tailwind CSS & Semangat.",
    right: "↑ KE ATAS",
  },
};

// -------------------------------------------------------------
// ENGLISH (EN)
// -------------------------------------------------------------
export const portfolioDataEn: PortfolioData = {
  meta: {
    owner: "Muhammad Rifky Saputra Scania",
    initials: "RF.",
    role: "Software Engineer — Web, Mobile & Multi-Platform",
    tagline: "Engineering software across Web, Mobile (Android), and Multi-Platform systems.",
    language: "en",
    style: "neo-brutalism",
  },

  navbar: {
    logo: "RF.",
    links: [
      { label: "Projects", href: "#projects" },
      { label: "About", href: "#about" },
      { label: "Skills", href: "#skills" },
      { label: "Experience", href: "#experience" },
      { label: "Certificates", href: "#certificates" },
      { label: "Contact", href: "#contact" },
    ],
    ctaButton: {
      text: "DOWNLOAD CV",
      href: "/files/cv-rifky.pdf",
    },
  },

  hero: {
    headingLines: ["HEY THERE, I'M", "RIFKY", "SOFTWARE ENG."],
    disciplines: [
      { label: "WEB APPLICATIONS", color: "primary" },
      { label: "MOBILE (ANDROID)", color: "accentPink" },
      { label: "MULTI-PLATFORM", color: "accentBlue" },
    ],
    typewriterSequence: [
      "Software Engineer.",
      1800,
      "Building high-performance Web apps.",
      1800,
      "Developing Android Mobile apps with Flutter.",
      1800,
      "Architecting resilient Multi-Platform systems.",
      1800,
      "Exploring Data Science, Machine Learning & Deep Learning.",
      1800,
    ],
    cta: [
      { text: "VIEW PROJECTS", href: "#projects", variant: "primary" },
      { text: "GET IN TOUCH", href: "#contact", variant: "outline" },
    ],
    photo: {
      src: "/images/hero-photo.png",
      alt: "Muhammad Rifky Saputra Scania Photo",
      label: "FIG. 01 — RIFKY",
      circularText: "• DESIGN • CODE • CRAFT • INNOVATE ",
      stickerText: "OPEN TO WORK",
      badgeText: "★ VERIFIED DEV ★",
    },
  },

  marquee1: [
    "SOFTWARE ENGINEER",
    "✱",
    "WEB APPLICATIONS",
    "✱",
    "MOBILE ANDROID",
    "✱",
    "FLUTTER & DART",
    "✱",
    "MULTI-PLATFORM",
    "✱",
    "NEXT.JS & REACT",
    "✱",
    "TAILWIND CSS",
    "✱",
    "CLEAN ARCHITECTURE",
    "✱",
  ],

  about: {
    heading: { label: "01 / ABOUT ME", text: "CODE, SYSTEMS & DATA." },
    photo: {
      src: "/images/about-photo.png",
      alt: "Muhammad Rifky coding on a laptop",
      quoteText: '“I hate when people said "It works on my machine"”',
    },
    badges: [
      "SOFTWARE ENGINEERING",
      "FLUTTER & ANDROID",
      "DATA SCIENCE & ML/DL",
    ],
    paragraphs: [
      "Hi! I'm Muhammad Rifky, an Informatics Engineering student at Universitas Muslim Indonesia (7th semester) focusing on Software Engineering. I build Web, Mobile (Android), and Multi-Platform applications.",
      "Beyond core software engineering, I have a deep interest in Data Science, Machine Learning (ML), and Deep Learning (DL). I enjoy analyzing datasets, experimenting with intelligent models, and bridging the gap between data-driven intelligence and production-grade software.",
    ],
    stats: [
      { value: 9, suffix: "+", label: "Featured Projects", color: "primary" },
      { value: 7, suffix: " Sem", label: "Informatics Eng.", color: "accentPink" },
      { value: 6, suffix: "+", label: "Official Credentials", color: "accentBlue" },
    ],
  },

  projects: {
    heading: { label: "02 / WORK", text: "FEATURED PROJECTS" },
    pageLabel: "SECTION",
    totalLabel: "TOTAL PROJECTS",
    categoryLabels: {
      web: "01 / WEB DEVELOPMENT",
      mobile: "02 / MOBILE (ANDROID)",
      multiplatform: "03 / MULTI-PLATFORM",
    },
    prevButton: "PREVIOUS",
    nextButton: "NEXT",
    caseStudyButton: "CASE STUDY",
    demoButton: "LIVE DEMO",
    codeButton: "SOURCE CODE",
    modal: {
      title: "PROJECT CASE STUDY",
      problem: "01 / PROBLEM & CHALLENGE",
      role: "02 / ENGINEERING ROLE",
      process: "03 / TECHNICAL PROCESS",
      tools: "04 / TOOLS & STACK",
      result: "05 / IMPACT & RESULTS",
      visitLive: "VISIT LIVE PROJECT",
      viewGithub: "GITHUB REPOSITORY",
      close: "CLOSE CASE STUDY",
    },
    items: [
      // ==========================================
      // SECTION 1: WEB DEVELOPMENT (3 DISPLAY)
      // ==========================================
      {
        id: "information-perisai-system",
        number: "01",
        title: "InformationPerisai-System — UKM PERISAI UMI",
        description: "Unified digital platform for the Student Research Development Center at Universitas Muslim Indonesia. Blending Dark Luxury & Scientific Prestige with a secure internal CMS.",
        thumbnail: "/images/project-perisai.png",
        status: "LIVE",
        category: "web",
        tags: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "Prisma ORM", "Turso / LibSQL"],
        rotation: "-1.2deg",
        caseStudy: {
          masalah: "Urgent migration from legacy PHP/Laravel to modern reactive web architecture, zero-code CMS autonomy for yearly committee turnovers, and shared database integrity with PSDM systems under a strict zero-destruction policy.",
          peran: "Fullstack Web Developer / Software Engineer — architected the public portal, centralized RBAC authorization, custom staff CMS, and dual-driver database integration.",
          proses: "Separated public routes with SSR/ISR and protected admin panel routes, designed 21 relational tables with a Schema Guard for dual-driver support (local SQLite & Turso LibSQL Cloud), and implemented dynamic deadline calculations in WITA timezone (UTC+8).",
          tools: "Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, Prisma ORM, SQLite / Turso (LibSQL), Zod",
          hasil: "Drastic performance & SEO boost (SSR/ISR), autonomous CMS dashboard for 42 active committee officers, 100% shared database preservation without data collision, and automated research competition deadline tracking.",
          liveUrl: "https://perisai-umi.com",
          repoUrl: "https://github.com/Justrifkyy",
        },
      },
      {
        id: "neo-threads",
        number: "02",
        title: "Neo//Threads Brutalist Apparel",
        description: "Streetwear e-commerce platform engineered with neo-brutalist micro-interactions, dynamic catalog, and atomic checkout flow.",
        thumbnail: "/images/project-shop.jpg",
        status: "OPEN SOURCE",
        category: "web",
        tags: ["React 19", "Next.js", "Tailwind CSS", "Stripe API", "Motion"],
        rotation: "1.2deg",
        caseStudy: {
          masalah: "An independent streetwear brand required an unapologetic digital store to break free from generic cookie-cutter e-commerce templates.",
          peran: "Fullstack Architect — conceived the neo-brutalist visual identity and developed headless e-commerce architecture.",
          proses: "Engineered atomic state cart, URL-param-based instantaneous catalog filtering, and robust Stripe payment integration.",
          tools: "Next.js App Router, Tailwind CSS, Motion, Stripe API, Supabase",
          hasil: "Conversion rate increased by 28% and user session browsing time surged 2.5x during the initial launch week.",
          liveUrl: "https://neothreads.store",
          repoUrl: "https://github.com/Justrifkyy/neo-threads",
        },
      },
      {
        id: "prompt-verse",
        number: "03",
        title: "PromptVerse AI Studio",
        description: "Split-screen developer playground for testing, evaluation, and token streaming orchestration across multiple LLMs.",
        thumbnail: "/images/project-aistudio.jpg",
        status: "WIP",
        category: "web",
        tags: ["Next.js", "AI SDK", "Monaco Editor", "PostgreSQL", "Tailwind"],
        rotation: "-0.8deg",
        caseStudy: {
          masalah: "AI engineers struggled to benchmark prompt completions side-by-side with live token cost telemetry.",
          peran: "Fullstack Developer — designed token streaming backend architecture and responsive split-screen code workspace.",
          proses: "Integrated Vercel AI SDK with Monaco Code Editor, parallel multi-model streaming, and interactive markdown rendering.",
          tools: "Next.js 16, Vercel AI SDK, TypeScript, Monaco Editor, Tailwind CSS",
          hasil: "Adopted by 350+ beta developers with an average 4.9/5 satisfaction rating for prompt engineering workflows.",
          liveUrl: "https://promptverse.dev",
          repoUrl: "https://github.com/Justrifkyy/promptverse-ide",
        },
      },

      // ==========================================
      // SECTION 2: MOBILE APPS (ANDROID / FLUTTER) (3 DISPLAY)
      // ==========================================
      {
        id: "agroscan-mobile",
        number: "04",
        title: "AgroScan Mobile — AI Plant Disease Detector",
        description: "Intelligent Android mobile app built with Flutter for early crop leaf disease diagnosis via camera and on-device offline machine learning models.",
        thumbnail: "/images/project-flutter.jpg",
        status: "LIVE",
        category: "mobile",
        tags: ["Flutter", "Dart", "Android", "TensorFlow Lite", "SQLite Offline"],
        rotation: "-1.2deg",
        caseStudy: {
          masalah: "Farmers in remote agricultural zones could not diagnose crop leaf diseases promptly due to unreliable field internet connections.",
          peran: "Mobile Software Engineer — built Flutter architecture, on-device machine learning inference pipeline, and offline-first data sync.",
          proses: "Integrated TensorFlow Lite for zero-latency on-device inference, background synchronization when connectivity returns, and 60 FPS UI rendering.",
          tools: "Flutter 3, Dart, TensorFlow Lite, SQLite Offline-First, Bloc State Management, Camera API",
          hasil: "94.2% diagnostic precision under 0.4 seconds completely offline, validated in field trials across 3 farming cooperatives.",
          liveUrl: "https://github.com/Justrifkyy",
          repoUrl: "https://github.com/Justrifkyy/agroscan-mobile",
        },
      },
      {
        id: "karsapay-mobile",
        number: "05",
        title: "KarsaPay Mobile — Digital Wallet & QRIS Android",
        description: "Android-based digital wallet & merchant ledger app with instant QRIS scanner, biometric authentication, and real-time transaction audit.",
        thumbnail: "/images/project-karsapay.jpg",
        status: "LIVE",
        category: "mobile",
        tags: ["Flutter", "Dart", "Android", "QRIS Scanner", "Bloc", "Local Auth"],
        rotation: "1deg",
        caseStudy: {
          masalah: "Local micro-merchants required a lightweight, snappy mobile wallet that runs smoothly on entry-level Android devices with instant QRIS support.",
          peran: "Mobile Developer — designed high-contrast neo-brutalist UI/UX, Bloc state management, and camera barcode/QRIS scanning pipeline.",
          proses: "Engineered ultra-fast QR decoding, secure local credential storage with Flutter Secure Storage, fingerprint biometric auth, and instant mutation logs.",
          tools: "Flutter 3, Dart, Mobile Scanner, Bloc State Management, Secure Storage, Biometric API",
          hasil: "QRIS scan speed under 200ms, lightweight APK (<18 MB), and clean intuitive interface for non-technical small business owners.",
          liveUrl: "https://github.com/Justrifkyy",
          repoUrl: "https://github.com/Justrifkyy/karsapay-mobile",
        },
      },
      {
        id: "yukngaji-android",
        number: "06",
        title: "YukNgaji Android — Al-Quran & Daily Habit Tracker",
        description: "Distraction-free offline Android Al-Quran app, daily reading streak tracker, audio recitations, and local prayer time calculation.",
        thumbnail: "/images/project-yukngaji.jpg",
        status: "OPEN SOURCE",
        category: "mobile",
        tags: ["Flutter", "Dart", "Android", "Hive DB", "Audio Player", "Clean Arch"],
        rotation: "-0.8deg",
        caseStudy: {
          masalah: "Many Islamic mobile apps are bogged down by intrusive popup ads, battery drain, and inability to read offline.",
          peran: "Mobile Software Engineer — built Clean Architecture, low-latency audio recitation streaming, and offline 30-Juz database.",
          proses: "Utilized Hive NoSQL database for instant 0ms verse loading, background audio caching, device-coordinate prayer time math, and daily reading streaks.",
          tools: "Flutter, Dart, Hive Local Database, Just Audio, Geolocation, Clean Architecture",
          hasil: "100% ad-free experience, RAM usage strictly under 65MB, and ultra-smooth scrolling on all Android phones.",
          liveUrl: "https://github.com/Justrifkyy",
          repoUrl: "https://github.com/Justrifkyy/yukngaji-android",
        },
      },

      // ==========================================
      // SECTION 3: MULTI-PLATFORM (3 DISPLAY)
      // ==========================================
      {
        id: "fleettrack-pro",
        number: "07",
        title: "FleetTrack Pro — Cross-Platform Logistics System",
        description: "Integrated real-time logistics tracking system with Web Operations Dashboard and Android Mobile Driver App via low-latency GPS telemetry.",
        thumbnail: "/images/project-multiplatform.jpg",
        status: "LIVE",
        category: "multiplatform",
        tags: ["Multi-Platform", "Flutter Android", "Next.js 16", "Go Backend", "WebSockets"],
        rotation: "-1.2deg",
        caseStudy: {
          masalah: "A regional freight company faced severe communication and routing bottlenecks between dispatch managers and field drivers.",
          peran: "Fullstack & Multi-Platform Engineer — architected Go microservices backend, web management dashboard, and Android driver app.",
          proses: "Implemented WebSocket telemetry streaming, battery-conservative background geo-tracking on Android, and Mapbox GL vector route visualization on Web.",
          tools: "Next.js 16, Flutter (Android), Go (Golang), WebSockets, PostgreSQL, Mapbox GL",
          hasil: "Decreased route deviation by 35% and slashed vehicle fuel expenditure by 18% month-over-month.",
          liveUrl: "https://github.com/Justrifkyy",
          repoUrl: "https://github.com/Justrifkyy/fleettrack-pro",
        },
      },
      {
        id: "makassar-creative-hub",
        number: "08",
        title: "Makassar Creative Hub — Open Directory & Event Portal",
        description: "Interactive directory and collaborative calendar connecting creative workers, developers, and tech communities across Eastern Indonesia.",
        thumbnail: "/images/project-makassarhub.jpg",
        status: "OPEN SOURCE",
        category: "multiplatform",
        tags: ["Multi-Platform", "Next.js 16", "Flutter Android", "Supabase", "Open Source"],
        rotation: "1deg",
        caseStudy: {
          masalah: "Tech meetups and creative event details were scattered across social media without a persistent archive or centralized registration.",
          peran: "Lead Maintainer & Software Engineer — initiated the open-source project, designed brand assets, and built the web portal and mobile companion app.",
          proses: "Built Supabase authentication, crowdsourced schedule moderation, calendar synchronization, and automated push reminders.",
          tools: "Next.js App Router, Flutter Android, Supabase Auth & DB, Tailwind CSS v4, Lucide Icons",
          hasil: "Facilitated 40+ grassroots community gatherings in 2024, connecting over 1,200 active creatives.",
          liveUrl: "https://github.com/Justrifkyy",
          repoUrl: "https://github.com/Justrifkyy/makassar-creative-hub",
        },
      },
      {
        id: "devpulse-multiplatform",
        number: "09",
        title: "DevPulse — Desktop & Mobile System Monitor",
        description: "Real-time system health, Docker container, and API metric monitor running on Flutter Desktop (Windows/Linux) and Flutter Android.",
        thumbnail: "/images/project-devpulse.jpg",
        status: "LIVE",
        category: "multiplatform",
        tags: ["Multi-Platform", "Flutter Desktop", "Flutter Android", "Rust Core", "WebSockets"],
        rotation: "-0.8deg",
        caseStudy: {
          masalah: "Developers and sysadmins waste time toggling multiple SSH terminal sessions to check CPU, RAM, Docker containers, and server latency.",
          peran: "Multi-Platform Software Engineer — engineered a unified cross-platform system monitor for Windows desktop and Android mobile from a single Flutter codebase.",
          proses: "Integrated encrypted WebSocket telemetry streams, reactive performance charts, and threshold-based push alerts for server downtime.",
          tools: "Flutter 3 (Desktop & Mobile), Dart, Rust Telemetry Agent, WebSockets, Secure Channels",
          hasil: "Unified single codebase for Desktop & Mobile, low memory footprint (<40MB in background), and metric latency <50ms.",
          liveUrl: "https://github.com/Justrifkyy",
          repoUrl: "https://github.com/Justrifkyy/devpulse-monitor",
        },
      },
    ],
  },

  marquee2: [
    "TYPESCRIPT",
    "✱",
    "NEXT.JS 16",
    "✱",
    "FLUTTER & DART",
    "✱",
    "TAILWIND CSS V4",
    "✱",
    "ANDROID",
    "✱",
    "NODE.JS",
    "✱",
    "POSTGRESQL",
    "✱",
    "DOCKER",
    "✱",
    "CLEAN ARCHITECTURE",
    "✱",
  ],

  skills: {
    heading: { label: "03 / ARSENAL", text: "SKILLS & TOOLS" },
    groups: [
      {
        title: "WEB & BACKEND",
        color: "primary",
        items: [
          "Next.js 16 (App Router)",
          "React 19",
          "TypeScript",
          "Tailwind CSS v4",
          "Node.js & Express",
          "PostgreSQL & Prisma ORM",
          "RESTful APIs",
          "WebSockets & Realtime",
          "Web Performance & SEO",
        ],
      },
      {
        title: "MOBILE (ANDROID)",
        color: "accentPink",
        items: [
          "Flutter & Dart",
          "Android App Development",
          "Offline-First & SQLite",
          "State Management (Bloc / Provider)",
          "REST API Integration",
          "Local Auth & QR Scanner",
          "Responsive Mobile UI/UX",
        ],
      },
      {
        title: "MULTI-PLATFORM & DATA TOOLS",
        color: "accentBlue",
        items: [
          "Cross-Platform System Architecture",
          "Python & Data Science",
          "Machine Learning & Deep Learning",
          "TensorFlow Lite & AI Models",
          "Git & GitHub Actions CI/CD",
          "Docker Containers",
          "Turso & Cloud Databases",
          "Clean Architecture",
          "Linux Shell & Troubleshooting",
        ],
      },
    ],
  },

  experience: {
    heading: { label: "04 / TIMELINE", text: "EXPERIENCE & EDUCATION" },
    items: [
      {
        period: "2023 — PRESENT (2026)",
        title: "B.Sc. Informatics Engineering (7th Sem)",
        org: "Universitas Muslim Indonesia (UMI)",
        summary: "Focusing on Software Engineering, data structures, and application development. Built the research platform InformationPerisai-System for UKM PERISAI UMI along with various Web and Android mobile systems.",
      },
      {
        period: "2022",
        title: "IT Support & Field Work Practice (PKL)",
        org: "MD Komputer Maros",
        summary: "Handled computer hardware & software troubleshooting, operating system installation, PC assembly, local network configuration (LAN), and technical device support.",
      },
      {
        period: "2019 — 2022",
        title: "Computer & Network Engineering (TKJ)",
        org: "SMK Kebangsaan Indonesia Maros",
        summary: "Learned computer networking and software fundamentals. Actively served as Programming Lab Assistant and IT Support for computer lab maintenance and student mentoring.",
      },
    ],
  },

  certificates: {
    heading: { label: "05 / CREDENTIALS", text: "CERTIFICATIONS & BADGES" },
    description: "Accredited qualifications and verified professional certifications across Web, Mobile (Android), and Cloud Architecture. Click to inspect credential.",
    verifyButton: "OFFICIAL VERIFICATION",
    previewButton: "VIEW CERTIFICATE",
    items: [
      {
        id: "cert-flutter",
        title: "Building Multi-Platform Applications with Flutter",
        issuer: "Dicoding Indonesia / Google Authorized",
        year: "2024",
        category: "Mobile",
        credentialId: "DCD-FLUTTER-8921",
        credentialUrl: "https://www.dicoding.com",
        badgeColor: "accentPink",
        image: "/images/cert-flutter.jpg",
      },
      {
        id: "cert-frontend-expert",
        title: "Becoming a Front-End Web Developer Expert",
        issuer: "Dicoding Indonesia",
        year: "2024",
        category: "Web",
        credentialId: "DCD-FE-EXPERT-7142",
        credentialUrl: "https://www.dicoding.com",
        badgeColor: "primary",
        image: "/images/cert-frontend.jpg",
      },
      {
        id: "cert-bnsp",
        title: "Certified Junior Web Developer",
        issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
        year: "2023",
        category: "Software Eng",
        credentialId: "BNSP-TIK-09218",
        credentialUrl: "https://bnsp.go.id",
        badgeColor: "accentBlue",
        image: "/images/cert-bnsp.jpg",
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
        image: "/images/cert-aws.jpg",
      },
      {
        id: "cert-solid",
        title: "SOLID Principles & Clean Architecture",
        issuer: "Dicoding Academy",
        year: "2024",
        category: "Architecture",
        credentialId: "DCD-SOLID-5501",
        credentialUrl: "https://www.dicoding.com",
        badgeColor: "accentPink",
        image: "/images/cert-solid.jpg",
      },
      {
        id: "cert-android",
        title: "Android Application Development Fundamentals",
        issuer: "Google Developers / Dicoding",
        year: "2023",
        category: "Mobile",
        credentialId: "DCD-ANDR-34018",
        credentialUrl: "https://www.dicoding.com",
        badgeColor: "accentBlue",
        image: "/images/cert-android.jpg",
      },
    ],
  },

  downloads: {
    heading: { label: "06 / TAKEAWAY", text: "DOWNLOAD ASSETS" },
    items: [
      {
        title: "CV (ATS)",
        description: "Concise, internationally compliant, optimized for automated enterprise ATS screening systems.",
        file: "/files/cv-rifky.pdf",
        icon: "file-text",
        color: "primary",
        button: "DOWNLOAD CV",
      },
      {
        title: "PORTFOLIO PDF",
        description: "Curated showcase of top works, system architectures, and deep case studies in one comprehensive document.",
        file: "/files/portfolio-rifky.pdf",
        icon: "folder",
        color: "accentPink",
        button: "DOWNLOAD PORTFOLIO",
      },
    ],
    note: "CV and tailored portfolio documents are available directly via email upon request.",
  },

  contact: {
    headingPart1: "LET'S ",
    headingHighlight: "BUILD",
    headingPart2: " TOGETHER.",
    email: "rifky020504@gmail.com",
    form: {
      nameLabel: "FULL NAME *",
      namePlaceholder: "Enter your full name",
      nameRequired: "Full name is required",
      emailLabel: "ACTIVE EMAIL *",
      emailPlaceholder: "name@domain.com",
      emailRequired: "Email address is required",
      emailInvalid: "Invalid email format",
      messageLabel: "MESSAGE / PROJECT DETAILS *",
      messagePlaceholder: "Tell me about your project, ideas, or engineering goals...",
      messageRequired: "Message cannot be empty",
      messageMin: "Message must be at least 10 characters",
      submitButton: "SEND MESSAGE NOW",
      submittingButton: "SENDING MESSAGE...",
      successTitle: "★ MESSAGE SENT SUCCESSFULLY! ★",
      successMessage: "Thank you! I will get back to you as soon as possible.",
      resetButton: "SEND ANOTHER MESSAGE",
    },
    directLabel: "REACH OUT DIRECTLY VIA EMAIL:",
    copyButton: "COPY EMAIL",
    copiedButton: "EMAIL COPIED!",
    socials: [
      { label: "GITHUB", url: "https://github.com/Justrifkyy" },
      { label: "LINKEDIN", url: "https://www.linkedin.com/in/muh-rifky-saputra-scania" },
      { label: "INSTAGRAM", url: "https://www.instagram.com/justrifkyy_" },
    ],
  },

  footer: {
    left: "© 2026 Muhammad Rifky Saputra Scania",
    center: "Built with Next.js, Tailwind CSS & Dedication.",
    right: "↑ BACK TO TOP",
  },
};

// Default export for backward compatibility
export const portfolioData = portfolioDataId;

export function getPortfolioData(lang: "id" | "en"): PortfolioData {
  return lang === "en" ? portfolioDataEn : portfolioDataId;
}
