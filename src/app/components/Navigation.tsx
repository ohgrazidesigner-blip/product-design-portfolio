import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "motion/react";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const scrollBehavior: ScrollBehavior = shouldReduceMotion
    ? "auto"
    : "smooth";

  const navItems = [
    { label: "Work", id: "case-studies" },
    { label: "About", id: "about" },
    { label: "Design Systems", id: "design-system" },
  ];

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
      aria-label="Primary navigation"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="border-b border-border bg-background/90 backdrop-blur-lg">
        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-24">
          <div className="flex min-h-[76px] items-center justify-between">
            <button
              type="button"
              aria-label="Graziele Costa, back to top"
              onClick={scrollToTop}
              className="inline-flex min-h-11 items-center rounded-md px-2 text-sm font-medium transition-colors hover:text-[var(--premium-accent)]"
            >
              Graziele Costa
            </button>

            <div className="hidden items-center gap-6 md:flex">
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
            </div>

            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="hidden min-h-11 items-center justify-center rounded-lg bg-[var(--premium-accent)] px-6 text-sm font-medium text-white transition-all duration-300 hover:bg-[var(--premium-accent-dark)] md:inline-flex"
            >
              Contact
            </button>

            <button
              type="button"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={
                isMenuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              onClick={() =>
                setIsMenuOpen((current) => !current)
              }
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-border transition-colors hover:border-[var(--premium-accent)] hover:text-[var(--premium-accent)] md:hidden"
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

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="border-b border-border bg-background/95 px-6 py-5 shadow-sm backdrop-blur-lg md:hidden"
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

              <button
                type="button"
                onClick={() => scrollToSection("contact")}
                className="mt-2 inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-[var(--premium-accent)] px-6 text-base font-medium text-white transition-colors hover:bg-[var(--premium-accent-dark)]"
              >
                Contact
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}