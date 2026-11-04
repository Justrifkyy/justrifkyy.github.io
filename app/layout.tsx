import type { Metadata } from "next";
import { Bricolage_Grotesque, Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { LanguageProvider } from "@/components/providers/LanguageProvider";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { NoiseOverlay } from "@/components/ui/NoiseOverlay";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = "https://justrifkyy.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Muhammad Rifky Saputra Scania — Software Engineer | Web, Mobile & Multi-Platform",
    template: "%s | Muhammad Rifky Saputra Scania",
  },
  description:
    "Portofolio resmi Muhammad Rifky Saputra Scania (Justrifkyy) — Software Engineer dan mahasiswa Teknik Informatika Universitas Muslim Indonesia (UMI). Spesialisasi dalam Web Development (Next.js, React), Mobile Android (Flutter), dan Sistem Multi-Platform.",
  applicationName: "Muhammad Rifky Saputra Scania Portfolio",
  authors: [
    {
      name: "Muhammad Rifky Saputra Scania",
      url: "https://github.com/Justrifkyy",
    },
  ],
  generator: "Next.js",
  keywords: [
    "Muhammad Rifky Saputra Scania",
    "Muhammad Rifky",
    "Rifky",
    "Justrifkyy",
    "Software Engineer",
    "Software Engineer Indonesia",
    "Web Developer Makassar",
    "Android Developer Flutter",
    "Universitas Muslim Indonesia",
    "Teknik Informatika UMI",
    "Frontend Developer",
    "Backend Developer",
    "Fullstack Developer",
    "Next.js Developer",
    "Flutter Android Developer",
    "Portfolio Software Engineer",
    "Neo Brutalism Portfolio",
  ],
  creator: "Muhammad Rifky Saputra Scania",
  publisher: "Muhammad Rifky Saputra Scania",
  formatDetection: {
    email: true,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      "id-ID": siteUrl,
      "en-US": siteUrl,
    },
  },
  openGraph: {
    type: "profile",
    firstName: "Muhammad Rifky",
    lastName: "Saputra Scania",
    username: "Justrifkyy",
    gender: "male",
    title: "Muhammad Rifky Saputra Scania — Software Engineer Portfolio",
    description:
      "Portofolio resmi Muhammad Rifky Saputra Scania — Software Engineer (Web, Mobile Android, Multi-Platform). Eksplorasi studi kasus rekayasa perangkat lunak, sistem, dan arsitektur kode.",
    url: siteUrl,
    siteName: "Muhammad Rifky Saputra Scania Portfolio",
    locale: "id_ID",
    alternateLocale: ["en_US"],
    images: [
      {
        url: "/images/about-photo.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Rifky Saputra Scania — Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Rifky Saputra Scania — Software Engineer",
    description:
      "Portofolio resmi Muhammad Rifky Saputra Scania — Software Engineer (Web, Mobile Android, Multi-Platform).",
    creator: "@Justrifkyy",
    images: ["/images/about-photo.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [{ url: "/logo-icon.svg", type: "image/svg+xml" }],
    shortcut: "/logo-icon.svg",
    apple: "/logo-icon.svg",
  },
  manifest: "/manifest.json",
  category: "technology",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Muhammad Rifky Saputra Scania",
      givenName: "Muhammad Rifky",
      familyName: "Saputra Scania",
      additionalName: "Rifky",
      alternateName: [
        "Muhammad Rifky",
        "Rifky",
        "Justrifkyy",
        "Muh Rifky Saputra Scania",
        "Ikyy",
      ],
      gender: "Male",
      url: siteUrl,
      image: `${siteUrl}/images/about-photo.png`,
      jobTitle: "Software Engineer",
      description:
        "Muhammad Rifky Saputra Scania adalah Software Engineer asal Indonesia dan mahasiswa Teknik Informatika di Universitas Muslim Indonesia (UMI). Berfokus pada pengembangan Web (Next.js, React), Mobile Android (Flutter), dan Sistem Multi-Platform.",
      email: "mailto:rifky020504@gmail.com",
      nationality: {
        "@type": "Country",
        name: "Indonesia",
      },
      alumniOf: [
        {
          "@type": "CollegeOrUniversity",
          name: "Universitas Muslim Indonesia",
          department: "Fakultas Ilmu Komputer, Teknik Informatika",
          url: "https://umi.ac.id",
        },
        {
          "@type": "HighSchool",
          name: "SMK Kebangsaan Indonesia Maros",
          department: "Teknik Komputer dan Jaringan (TKJ)",
        },
      ],
      worksFor: [
        {
          "@type": "Organization",
          name: "Laboratorium Komputer UMI",
          roleName: "Laboratory Assistant",
        },
        {
          "@type": "Organization",
          name: "Manga Travel",
          roleName: "Backend Developer (KKP)",
        },
      ],
      sameAs: [
        "https://github.com/Justrifkyy",
        "https://www.linkedin.com/in/muh-rifky-saputra-scania",
        "https://www.instagram.com/justrifkyy_",
      ],
      knowsAbout: [
        "Software Engineering",
        "Web Development",
        "Mobile App Development",
        "Android Development",
        "Flutter",
        "Next.js",
        "React",
        "TypeScript",
        "JavaScript",
        "Dart",
        "Java",
        "PHP",
        "Laravel",
        "Tailwind CSS",
        "Docker",
        "RESTful APIs",
        "Clean Architecture",
        "MySQL",
        "SQLite",
        "Turso Database",
        "Data Science",
        "Machine Learning",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Muhammad Rifky Saputra Scania — Portfolio",
      description:
        "Portofolio resmi Muhammad Rifky Saputra Scania — Software Engineer (Web, Mobile Android, Multi-Platform)",
      publisher: {
        "@id": `${siteUrl}/#person`,
      },
      inLanguage: ["id-ID", "en-US"],
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#profilepage`,
      url: siteUrl,
      name: "Muhammad Rifky Saputra Scania — Software Engineer Portfolio",
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      about: {
        "@id": `${siteUrl}/#person`,
      },
      mainEntity: {
        "@id": `${siteUrl}/#person`,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${bricolage.variable} ${spaceGrotesk.variable} ${spaceMono.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-paper text-ink font-body selection:bg-primary selection:text-ink antialiased">
        <LanguageProvider>
          <SmoothScrollProvider>
            <ScrollProgress />
            <CustomCursor />
            <NoiseOverlay />
            {children}
          </SmoothScrollProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
