import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "motion/react";
import { FileText, Menu, X } from "lucide-react";
import { BehanceIcon } from "./BehanceIcon";
import { LanguageSelector } from "./LanguageSelector";
import { useLanguage } from "../i18n/LanguageContext";
import { copy } from "../i18n/copy";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const { language } = useLanguage();
  const c = copy[language];

  const scrollBehavior: ScrollBehavior = shouldReduceMotion
    ? "auto"
    : "smooth";

  const navItems = [
    { label: c.navigation.work, id: "case-studies" },
    { label: c.navigation.about, id: "about" },
    { label: c.navigation.designSystems, id: "design-system" },
  ];
  const resumeHref = `${import.meta.env.BASE_URL}graziele-costa-resume.pdf`;
  const behanceHref = "https://www.behance.net/grazieloliveira";

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    element?.scrollIntoView({
      behavior: scrollBehavior,
      block: "start",
    });

    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: scrollBehavior,
    });

    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <motion.nav
      aria-label={c.navigation.aria}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="border-b border-border bg-background/90 backdrop-blur-lg">
        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-24">
          <div className="flex min-h-[76px] items-center justify-between gap-4">
            <button
              type="button"
              aria-label={c.navigation.backToTop}
              onClick={scrollToTop}
              className="inline-flex min-h-11 shrink-0 items-center rounded-md px-2 text-sm font-medium transition-colors hover:text-[var(--premium-accent)]"
            >
              Graziele Costa
            </button>

            <div className="hidden items-center gap-4 lg:flex">
              {navItems.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="inline-flex min-h-11 items-center rounded-md px-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </button>
              ))}

              <a
                href={resumeHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-md px-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <FileText aria-hidden="true" className="h-4 w-4" />
                {c.navigation.resume}
                <span className="sr-only">
                  {c.navigation.opensNewTab}
                </span>
              </a>

              <a
                href={behanceHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={c.app.behanceAria}
                title="Behance"
                className="inline-flex h-11 w-11 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted/50 hover:text-[var(--premium-accent)]"
              >
                <BehanceIcon className="text-[18px]" />
              </a>
            </div>

            <div className="hidden shrink-0 items-center gap-2 md:flex">
              <button
                type="button"
                onClick={() => scrollToSection("contact")}
                className="hidden min-h-11 items-center justify-center rounded-lg bg-[var(--premium-accent)] px-5 text-sm font-medium text-white transition-all duration-300 hover:bg-[var(--premium-accent-dark)] lg:inline-flex"
              >
                {c.navigation.contact}
              </button>

              <LanguageSelector />

              <button
                type="button"
                aria-expanded={isMenuOpen}
                aria-controls="tablet-navigation"
                aria-label={
                  isMenuOpen
                    ? c.navigation.closeMenu
                    : c.navigation.openMenu
                }
                onClick={() =>
                  setIsMenuOpen((current) => !current)
                }
                className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-border transition-colors hover:border-[var(--premium-accent)] hover:text-[var(--premium-accent)] lg:hidden"
              >
                {isMenuOpen ? (
                  <X aria-hidden="true" className="h-5 w-5" />
                ) : (
                  <Menu aria-hidden="true" className="h-5 w-5" />
                )}
              </button>
            </div>

            <div className="flex items-center gap-2 md:hidden">
              <LanguageSelector compact />

              <button
                type="button"
                aria-expanded={isMenuOpen}
                aria-controls="mobile-navigation"
                aria-label={
                  isMenuOpen
                    ? c.navigation.closeMenu
                    : c.navigation.openMenu
                }
                onClick={() =>
                  setIsMenuOpen((current) => !current)
                }
                className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-border transition-colors hover:border-[var(--premium-accent)] hover:text-[var(--premium-accent)]"
              >
                {isMenuOpen ? (
                  <X aria-hidden="true" className="h-5 w-5" />
                ) : (
                  <Menu aria-hidden="true" className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="border-b border-border bg-background/95 px-6 py-5 shadow-sm backdrop-blur-lg lg:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-2">
              {navItems.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="inline-flex min-h-12 w-full items-center rounded-lg px-4 text-left text-base text-muted-foreground transition-colors hover:bg-muted/50 hover:text-foreground"
                >
                  {item.label}
                </button>
              ))}

              <a
                href={resumeHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 w-full items-center gap-2 rounded-lg px-4 text-left text-base text-muted-foreground transition-colors hover:bg-muted/50 hover:text-foreground"
              >
                <FileText aria-hidden="true" className="h-5 w-5" />
                {c.navigation.viewResume}
                <span className="sr-only">
                  {c.navigation.opensNewTab}
                </span>
              </a>

              <a
                href={behanceHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 w-full items-center gap-3 rounded-lg px-4 text-left text-base text-muted-foreground transition-colors hover:bg-muted/50 hover:text-foreground"
              >
                <BehanceIcon className="w-5 text-[18px]" />
                Behance
                <span className="sr-only">
                  {c.navigation.opensNewTab}
                </span>
              </a>

              <button
                type="button"
                onClick={() => scrollToSection("contact")}
                className="mt-2 inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-[var(--premium-accent)] px-6 text-base font-medium text-white transition-colors hover:bg-[var(--premium-accent-dark)]"
              >
                {c.navigation.contact}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
