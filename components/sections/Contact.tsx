"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Check, Copy, Send } from "lucide-react";
import confetti from "canvas-confetti";
import { BrutalistButton } from "../ui/BrutalistButton";
import { portfolioData } from "@/data/portfolio-data";

interface ContactFormData {
  nama: string;
  email: string;
  pesan: string;
}

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (_data: ContactFormData) => {
    setIsSubmitting(true);
    // Simulate send or integrate with Formspree / Web3Forms
    await new Promise((resolve) => setTimeout(resolve, 800));
    setIsSubmitting(false);
    setSubmitted(true);
    reset();

    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 },
      colors: ["#FFE14D", "#FF5DA2", "#4D7CFF", "#FFFDF5"],
    });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(portfolioData.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="relative py-20 md:py-28 bg-ink text-paper brutal-grid-dark border-b-4 border-ink overflow-hidden">
      <div className="w-full max-w-[1320px] mx-auto px-4 md:px-8">
        
        {/* Full Width Mega Heading */}
        <div className="mb-16">
          <h2 className="font-display font-extrabold uppercase text-clamp-h1 lg:text-mega leading-[0.9] tracking-tight">
            <span>MARI </span>
            <span className="relative inline-block mx-1">
              <span className="absolute inset-0 bg-primary -rotate-2 border-3 border-paper translate-y-1 shadow-[4px_4px_0_#FFE14D]" />
              <span className="relative text-ink px-3 py-0.5">KERJA</span>
            </span>
            <span> BARENG.</span>
          </h2>
        </div>

        {/* 2 Columns Layout: Form (Cols 1-7) & Info (Cols 8-12) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14">
          
          {/* Left: Contact Form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="border-4 border-primary bg-primary text-ink p-8 shadow-[8px_8px_0_#FFFDF5]">
                <h3 className="font-display font-black text-2xl md:text-3xl uppercase mb-2">
                  ★ PESAN BERHASIL TERKIRIM! ★
                </h3>
                <p className="font-mono text-sm md:text-base font-bold mb-6">
                  Terima kasih! Saya akan membalas pesan Anda sesegera mungkin.
                </p>
                <BrutalistButton
                  variant="dark"
                  size="sm"
                  onClick={() => setSubmitted(false)}
                >
                  KIRIM PESAN LAIN
                </BrutalistButton>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label className="block font-mono font-bold text-xs uppercase tracking-wider text-paper mb-2">
                    NAMA LENGKAP *
                  </label>
                  <input
                    type="text"
                    {...register("nama", { required: "Nama tidak boleh kosong" })}
                    placeholder="Masukkan nama Anda"
                    className="w-full bg-ink text-paper font-mono text-sm p-4 border-4 border-paper focus:border-primary focus:shadow-[6px_6px_0_#FFE14D] outline-none transition-all placeholder:text-paper/40"
                  />
                  {errors.nama && (
                    <span className="font-mono text-xs text-accent-pink font-bold mt-1.5 inline-block">
                      {errors.nama.message}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block font-mono font-bold text-xs uppercase tracking-wider text-paper mb-2">
                    ALAMAT EMAIL *
                  </label>
                  <input
                    type="email"
                    {...register("email", {
                      required: "Email tidak boleh kosong",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Format email tidak valid",
                      },
                    })}
                    placeholder="nama@perusahaan.com"
                    className="w-full bg-ink text-paper font-mono text-sm p-4 border-4 border-paper focus:border-primary focus:shadow-[6px_6px_0_#FFE14D] outline-none transition-all placeholder:text-paper/40"
                  />
                  {errors.email && (
                    <span className="font-mono text-xs text-accent-pink font-bold mt-1.5 inline-block">
                      {errors.email.message}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block font-mono font-bold text-xs uppercase tracking-wider text-paper mb-2">
                    PESAN / DISKUSI PROYEK *
                  </label>
                  <textarea
                    rows={5}
                    {...register("pesan", { required: "Pesan tidak boleh kosong" })}
                    placeholder="Ceritakan tentang proyek atau ide kolaborasi Anda..."
                    className="w-full bg-ink text-paper font-mono text-sm p-4 border-4 border-paper focus:border-primary focus:shadow-[6px_6px_0_#FFE14D] outline-none transition-all placeholder:text-paper/40 resize-y"
                  />
                  {errors.pesan && (
                    <span className="font-mono text-xs text-accent-pink font-bold mt-1.5 inline-block">
                      {errors.pesan.message}
                    </span>
                  )}
                </div>

                <div>
                  <BrutalistButton
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full sm:w-auto"
                    icon={<Send className="w-5 h-5 stroke-[3]" />}
                  >
                    {isSubmitting ? "MENGIRIM..." : "KIRIM PESAN →"}
                  </BrutalistButton>
                </div>
              </form>
            )}
          </div>

          {/* Right: Info & Socials (Cols 8-12) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            <div>
              <h3 className="font-mono font-bold text-xs uppercase tracking-wider text-primary mb-3">
                KIRIM SUREL LANGSUNG
              </h3>
              
              {/* Copy Email Button Box */}
              <div className="border-4 border-paper p-5 bg-ink shadow-[6px_6px_0_#FFFDF5] mb-8">
                <div className="font-mono text-xs text-paper/70 mb-1">KLIK UNTUK MENYALIN:</div>
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono font-bold text-base md:text-lg text-primary break-all">
                    {portfolioData.contact.email}
                  </span>
                  <button
                    onClick={copyEmail}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-paper text-ink font-mono font-bold text-xs uppercase border-2 border-paper hover:bg-primary transition-colors shrink-0"
                    data-cursor="link"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-green-700 stroke-[3]" />
                        <span>TERSALIN!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 stroke-[2.5]" />
                        <span>SALIN</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Social Media Links */}
              <div>
                <h3 className="font-mono font-bold text-xs uppercase tracking-wider text-primary mb-3">
                  TEMUKAN SAYA DI
                </h3>
                <div className="flex flex-col gap-3">
                  {portfolioData.contact.socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between px-5 py-3.5 border-3 border-paper font-mono font-bold text-sm uppercase text-paper hover:bg-primary hover:text-ink hover:border-primary transition-all duration-150 shadow-[4px_4px_0_#FFFDF5] hover:shadow-none hover:translate-x-1 hover:translate-y-1"
                      data-cursor="link"
                    >
                      <span>{social.label}</span>
                      <span className="text-primary group-hover:text-ink group-hover:translate-x-1 transition-transform">
                        ↗
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Availability Badge */}
            <div className="border-3 border-paper p-4 bg-paper/5">
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-paper">
                <span className="w-2.5 h-2.5 bg-primary rounded-full animate-pulse" />
                <span>STATUS: TERSEDIA UNTUK KONTRAK / FULLTIME</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
