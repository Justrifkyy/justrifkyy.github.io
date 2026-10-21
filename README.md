# ⚡ Rifky's Portfolio — Neo-Brutalist Web Platform

> Portofolio personal dengan estetika **Neo-Brutalisme** yang radikal, tegas, dan berkarakter kuat. Dibangun menggunakan arsitektur modern **Next.js 16 (App Router)**, **React 19**, **TypeScript**, dan **Tailwind CSS v4** dengan output static export untuk deployment di GitHub Pages.

---

## 📑 Daftar Isi

- [Sekilas Proyek](#-sekilas-proyek)
- [Filosofi Desain & Fitur Utama](#-filosofi-desain--fitur-utama)
- [Tech Stack](#-tech-stack)
- [Struktur Direktori](#-struktur-direktori)
- [Memulai (Getting Started)](#-memulai-getting-started)
- [Panduan Kustomisasi](#-panduan-kustomisasi)
- [Panduan Deployment (GitHub Pages)](#-panduan-deployment-github-pages)
- [Author & Lisensi](#-author--lisensi)

---

## 🎯 Sekilas Proyek

Website ini dirancang khusus untuk memamerkan karya rekayasa perangkat lunak, studi kasus mendalam, dan keahlian teknis **Muhammad Rifky** ([@justrifkyy](https://github.com/justrifkyy)). Desain mengadopsi prinsip desain **Neo-Brutalisme**: menolak gradasi halus dan elemen transparan generik demi kontras visual ekstrem, tipografi tegas, garis tepi tebal (4px solid ink), serta hard drop-shadow tanpa blur.

---

## 🎨 Filosofi Desain & Fitur Utama

- **Palet Warna Neo-Brutalisme**:
  - `Paper` (`#FFFDF5`): Latar kanvas utama yang hangat.
  - `Ink` (`#0A0A0A`): Warna teks, border 4px, dan bayangan solid.
  - `Primary Yellow` (`#FFE14D`): Warna aksen utama yang energik.
  - `Accent Pink` (`#FF5DA2`) & `Accent Blue` (`#4D7CFF`): Aksen kontras sekunder.
- **Tekstur & Grid Visual**:
  - Pola kisi (grid 48px) pada hero section dan kontak.
  - Overlay tekstur kertas (fractal noise) dengan blend mode *multiply*.
- **Kursor Kustom Interaktif (`CustomCursor`)**:
  - Kotak brutalist responsif pada perangkat desktop (otomatis nonaktif di layar sentuh).
  - Berubah ukuran dan menampilkan label kontekstual saat hover link (`BUKA`) dan kartu proyek (`LIHAT`).
- **Mikro-Interaksi Dinamis**:
  - Bar progres scroll 8px di bagian paling atas.
  - Smooth scrolling berbasis **Lenis** (mematuhi preferensi `prefers-reduced-motion`).
  - Animasi ketik mesin (*typewriter*) pada sub-judul hero.
  - Banner teks berjalan miring (*tilted marquee*) dengan arah dan kecepatan dinamis.
  - Animasi hitung maju (*count-up*) pada kartu statistik riwayat kerja.
  - Efek ledakan konfeti (*canvas-confetti*) pada tombol unduh berkas dan submit kontak.
- **Sistem Studi Kasus Interaktif**:
  - Dialog modal neo-brutalist menampilkan 5 dimensi studi kasus (*Tantangan*, *Peran*, *Proses*, *Tools*, dan *Dampak*) beserta tautan live website dan repositori kode.
- **Salin Email 1-Klik**:
  - Tombol salin email langsung ke clipboard dengan indikator toast responsif.

---

## 🛠️ Tech Stack

| Kategori | Teknologi | Deskripsi |
| :--- | :--- | :--- |
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router) | Static Site Generation (SSG) dengan `output: "export"` |
| **Library UI** | [React 19](https://react.dev/) | Versi React terbaru dengan performa rendering optimal |
| **Bahasa** | [TypeScript 5](https://www.typescriptlang.org/) | Strict Type Checking untuk keandalan kode |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) | Engine Tailwind terbaru dengan konfigurasi `@theme` |
| **Animasi** | [Motion](https://motion.dev/) (Framer Motion) | Gestur dan transisi komponen |
| **Smooth Scroll** | [Lenis](https://lenis.darkroom.engineering/) | Pengalaman scrolling berbasis inertia yang halus |
| **Teks Berjalan** | [React Fast Marquee](https://www.react-fast-marquee.com/) | Ticker banner horizontal multi-arah |
| **Typewriter** | [React Type Animation](https://github.com/maxmarinich/react-type-animation) | Animasi mengetik dinamis |
| **Form** | [React Hook Form](https://react-hook-form.com/) | Manajemen state form dan validasi input |
| **Efek Visual** | [Canvas Confetti](https://github.com/catdad/canvas-confetti) | Animasi perayaan interaktif |
| **Tipografi** | [Google Fonts via Next/Font](https://fonts.google.com/) | *Bricolage Grotesque*, *Space Grotesk*, dan *Space Mono* |
| **Hosting** | [GitHub Pages](https://pages.github.com/) | Hosting statis otomatis dari branch GitHub |

---

## 📂 Struktur Direktori

```text
justrifkyy.github.io/
├── app/
│   ├── favicon.ico / icon.svg  # Favicon vektor modern
│   ├── globals.css             # Design tokens Tailwind v4 & utilitas Neo-Brutalisme
│   ├── layout.tsx              # Root Layout, font loader, dan provider global
│   └── page.tsx                # Halaman utama portofolio
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Sticky navigation bar & mobile menu
│   │   └── Footer.tsx          # Footer & tombol smooth scroll ke atas
│   ├── providers/
│   │   └── SmoothScrollProvider.tsx # Provider Lenis smooth scroll
│   ├── sections/
│   │   ├── Hero.tsx            # Hero section, typewriter, pigura foto & stempel
│   │   ├── MarqueeBanner.tsx   # Ticker banner teks berjalan miring
│   │   ├── About.tsx           # Bio, foto duotone & count-up stats
│   │   ├── Projects.tsx        # Kartu proyek bergantian & modal studi kasus
│   │   ├── Skills.tsx          # Kotak kategori skill & chip interaktif
│   │   ├── Experience.tsx      # Timeline vertikal pengalaman & pendidikan
│   │   ├── Downloads.tsx       # Kartu unduh CV ATS & Portofolio PDF
│   │   └── Contact.tsx         # Formulir kontak & salin email
│   └── ui/
│       ├── BrandLogo.tsx       # Logo kustom monogram "R" & wordmark
│       ├── BrutalistButton.tsx # Tombol neo-brutalist multi-varian
│       ├── CustomCursor.tsx    # Kursor kustom desktop interaktif
│       ├── NoiseOverlay.tsx    # Overlay tekstur kertas
│       ├── ScrollProgress.tsx  # Bar indikator scroll atas
│       └── Sticker.tsx         # Lencana & stempel sudut miring
├── data/
│   └── portfolio-data.ts       # Single source of truth untuk seluruh konten portofolio
├── public/
│   ├── files/                  # Berkas dokumen unduhan (CV, portofolio PDF)
│   ├── images/                 # Aset gambar proyek & foto profil
│   ├── logo.svg                # Brand lockup horizontal
│   └── logo-icon.svg           # Simbol ikon vektor
├── next.config.ts              # Konfigurasi Next.js static export
├── package.json                # Dependensi proyek
└── tsconfig.json               # Konfigurasi TypeScript
```

---

## 🚀 Memulai (Getting Started)

### Prasyarat

Pastikan Anda telah memasang **Node.js** (versi 18.18+ atau 20+) dan **npm**.

### 1. Kloning Repositori

```bash
git clone https://github.com/justrifkyy/justrifkyy.github.io.git
cd justrifkyy.github.io
```

### 2. Pasang Dependensi

```bash
npm install
```

### 3. Jalankan Server Pengembangan

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) pada peramban Anda. Halaman akan memuat ulang secara otomatis saat Anda mengubah file kode.

### 4. Build Static Export (Produksi)

Untuk memvalidasi dan membuat berkas HTML statis siap deploy:

```bash
npm run build
```

Hasil export akan dibuat di dalam folder `out/`.

---

## ⚙️ Panduan Kustomisasi

Seluruh data portofolio telah dipusatkan dalam satu file yang terstruktur rapi:

### Mengubah Profil & Konten Proyek
Cukup buka dan edit file [`data/portfolio-data.ts`](file:///D:/Ikyy's%20File/PROJEKAN%20CODING/justrifkyy.github.io/data/portfolio-data.ts):
- **Identitas Personal**: Nama, peran, tagline, dan sosial media.
- **Proyek & Studi Kasus**: Tambahkan atau perbarui objek pada array `projects` (judul, thumbnail, tag teknologi, deskripsi masalah, peran, proses, alat, dan tautan live/repo).
- **Keahlian (Skills)**: Sesuaikan daftar tag pada array `skills.groups` (Frontend, Desain/Kreatif, Backend/Tools).
- **Pengalaman (Timeline)**: Perbarui riwayat kerja dan pendidikan pada array `experience.items`.

### Mengganti Foto & Berkas Unduhan
- Letakkan foto profil baru di `public/images/` (misalnya `hero-photo.png` dan `about-photo.png`).
- Letakkan berkas CV atau portofolio PDF di `public/files/` (misalnya `cv-rifky.pdf`).

---

## 🌐 Panduan Deployment (GitHub Pages)

Proyek ini telah dikonfigurasi dengan `output: "export"` di `next.config.ts`, menjadikannya sangat ideal untuk **GitHub Pages**:

### Opsi A: Deploy Otomatis via GitHub Actions (Direkomendasikan)
Buat file alur kerja `.github/workflows/deploy.yml`:

```yaml
name: Deploy Next.js to GitHub Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Detect package manager
        id: detect-package-manager
        run: echo "manager=npm" >> $GITHUB_OUTPUT
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: npm
      - name: Install dependencies
        run: npm ci
      - name: Build static export
        run: npm run build
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

Di repositori GitHub Anda:
1. Buka **Settings** > **Pages**.
2. Pada bagian **Build and deployment > Source**, pilih **GitHub Actions**.
3. Lakukan `git push` ke branch `main`, dan situs Anda akan otomatis terpublikasi di `https://justrifkyy.github.io`.

---

## 👤 Author & Lisensi

Dibuat dengan dedikasi tinggi oleh **Muhammad Rifky** ([@justrifkyy](https://github.com/justrifkyy)).

Proyek ini dilisensikan di bawah lisensi [MIT](LICENSE). Silakan gunakan sebagai inspirasi untuk portofolio Anda sendiri!

