"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "id" | "en";

type LanguageContextType = {
  lang: Lang;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextType>({
  lang: "id",
  toggleLanguage: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("id");

  const toggleLanguage = () => {
    setLang((prev) => (prev === "id" ? "en" : "id"));
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}