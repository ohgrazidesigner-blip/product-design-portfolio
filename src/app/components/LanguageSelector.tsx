import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import {
  type PortfolioLanguage,
  useLanguage,
} from "../i18n/LanguageContext";
import { copy } from "../i18n/copy";

type LanguageSelectorProps = {
  compact?: boolean;
};

const languageOptions: Array<{
  value: PortfolioLanguage;
  flag: string;
  shortLabel: string;
}> = [
  { value: "en", flag: "🇺🇸", shortLabel: "EN" },
  { value: "pt-BR", flag: "🇧🇷", shortLabel: "PT-BR" },
];

export function LanguageSelector({ compact = false }: LanguageSelectorProps) {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const c = copy[language];
  const currentOption =
    languageOptions.find((option) => option.value === language) ??
    languageOptions[0];

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (
        rootRef.current &&
        !rootRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const selectLanguage = (nextLanguage: PortfolioLanguage) => {
    setLanguage(nextLanguage);
    setIsOpen(false);
  };

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-label={c.language.menuAria}
        title={c.language.label}
        onClick={() => setIsOpen((current) => !current)}
        className={`inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-border bg-background/90 text-sm font-medium text-foreground shadow-sm backdrop-blur-lg transition-colors hover:border-[var(--premium-accent)] hover:text-[var(--premium-accent)] ${
          compact ? "w-11 px-0 sm:w-auto sm:px-3" : "px-3"
        }`}
      >
        <span aria-hidden="true" className="text-base leading-none">
          {currentOption.flag}
        </span>
        <span className={compact ? "hidden sm:inline" : "inline"}>
          {currentOption.shortLabel}
        </span>
        <ChevronDown
          aria-hidden="true"
          className={`h-3.5 w-3.5 transition-transform ${
            isOpen ? "rotate-180" : ""
          } ${compact ? "hidden sm:block" : "block"}`}
        />
      </button>

      {isOpen ? (
        <div
          role="menu"
          aria-label={c.language.menuAria}
          className="absolute right-0 top-[calc(100%+0.5rem)] z-[70] min-w-[220px] overflow-hidden rounded-xl border border-border bg-background p-1.5 shadow-xl"
        >
          {languageOptions.map((option) => {
            const isSelected = option.value === language;
            const label =
              option.value === "en"
                ? c.language.english
                : c.language.portuguese;

            return (
              <button
                key={option.value}
                type="button"
                role="menuitemradio"
                aria-checked={isSelected}
                onClick={() => selectLanguage(option.value)}
                className="flex min-h-11 w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm text-foreground transition-colors hover:bg-muted/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--premium-accent)]"
              >
                <span aria-hidden="true" className="text-lg leading-none">
                  {option.flag}
                </span>
                <span className="flex-1">{label}</span>
                {isSelected ? (
                  <Check
                    aria-hidden="true"
                    className="h-4 w-4 text-[var(--premium-accent)]"
                  />
                ) : null}
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
