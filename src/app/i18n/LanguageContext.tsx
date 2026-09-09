import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type PortfolioLanguage = "en" | "pt-BR";

const STORAGE_KEY = "graziele-portfolio-language";

type LanguageContextValue = {
  language: PortfolioLanguage;
  setLanguage: (language: PortfolioLanguage) => void;
  isPortuguese: boolean;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function getInitialLanguage(): PortfolioLanguage {
  if (typeof window === "undefined") {
    return "en";
  }

  const savedLanguage = window.localStorage.getItem(STORAGE_KEY);

  return savedLanguage === "pt-BR" ? "pt-BR" : "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<PortfolioLanguage>(getInitialLanguage);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      isPortuguese: language === "pt-BR",
    }),
    [language],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}
