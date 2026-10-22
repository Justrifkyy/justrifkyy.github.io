"use client";

import React, { createContext, useContext, useEffect, useState, useMemo } from "react";
import { PortfolioData, portfolioDataId, portfolioDataEn, getPortfolioData } from "@/data/portfolio-data";

export type Language = "id" | "en";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: PortfolioData;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "id",
  setLang: () => {},
  toggleLang: () => {},
  t: portfolioDataId,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>("id");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("portfolio_lang");
    if (saved === "id" || saved === "en") {
      setLangState(saved);
      document.documentElement.lang = saved;
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    try {
      localStorage.setItem("portfolio_lang", newLang);
      document.documentElement.lang = newLang;
    } catch {
      // localStorage may fail in restricted/private contexts
    }
  };

  const toggleLang = () => {
    const nextLang = lang === "id" ? "en" : "id";
    setLang(nextLang);
  };

  const t = useMemo(() => getPortfolioData(lang), [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
