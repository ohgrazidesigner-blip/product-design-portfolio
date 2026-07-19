import { useEffect, useRef, useState } from "react";
import { MotionConfig } from "motion/react";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { CaseStudies } from "./components/CaseStudies";
import { CaseStudyPage } from "./components/CaseStudyPage";
import { DesignSystem } from "./components/DesignSystem";
import { Process } from "./components/Process";
import { Contact } from "./components/Contact";
import { caseStudies } from "./data/caseStudies";

const CASE_QUERY_PARAMETER = "case";

function getCaseSlugFromUrl(): string | null {
  if (typeof window === "undefined") {
    return null;
  }

  const url = new URL(window.location.href);
  const slug =
    url.searchParams.get(CASE_QUERY_PARAMETER)?.trim() ?? "";

  const caseExists = caseStudies.some(
    (study) => study.slug === slug,
  );

  return caseExists ? slug : null;
}

export default function App() {
  const [selectedCaseSlug, setSelectedCaseSlug] = useState<
    string | null
  >(() => getCaseSlugFromUrl());

  const mainRef = useRef<HTMLElement>(null);

  const previousCaseSlugRef = useRef<string | null>(
    selectedCaseSlug,
  );

  const selectedStudy =
    caseStudies.find(
      (study) => study.slug === selectedCaseSlug,
    ) ?? null;

  const selectedStudyIndex = selectedStudy
    ? caseStudies.findIndex(
        (study) => study.slug === selectedStudy.slug,
      )
    : -1;

  const nextStudy =
    selectedStudyIndex >= 0
      ? caseStudies[
          (selectedStudyIndex + 1) % caseStudies.length
        ]
      : undefined;

  useEffect(() => {
    const synchronizeCaseWithUrl = () => {
      setSelectedCaseSlug(getCaseSlugFromUrl());
    };

    window.addEventListener("popstate", synchronizeCaseWithUrl);

    return () => {
      window.removeEventListener(
        "popstate",
        synchronizeCaseWithUrl,
      );
    };
  }, []);

  useEffect(() => {
    if (selectedStudy) {
      previousCaseSlugRef.current = selectedStudy.slug;

      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto",
      });

      const animationFrame = window.requestAnimationFrame(
        () => {
          mainRef.current?.focus({
            preventScroll: true,
          });
        },
      );

      return () => {
        window.cancelAnimationFrame(animationFrame);
      };
    }

    const previousSlug = previousCaseSlugRef.current;

    if (!previousSlug) {
      return;
    }

    const animationFrame = window.requestAnimationFrame(() => {
      const caseLink = document.getElementById(
        `case-study-link-${previousSlug}`,
      );

      if (caseLink instanceof HTMLElement) {
        caseLink.focus({
          preventScroll: true,
        });

        caseLink.scrollIntoView({
          block: "center",
          behavior: "auto",
        });
      } else {
        document
          .getElementById("case-studies")
          ?.scrollIntoView({
            block: "start",
            behavior: "auto",
          });
      }

      previousCaseSlugRef.current = null;
    });

    return () => {
      window.cancelAnimationFrame(animationFrame);
    };
  }, [selectedStudy]);

  useEffect(() => {
    document.title = selectedStudy
      ? `${selectedStudy.title} | Graziele Costa`
      : "Graziele Costa | Product Designer";
  }, [selectedStudy]);

  const handleSelectCase = (slug: string) => {
    const caseExists = caseStudies.some(
      (study) => study.slug === slug,
    );

    if (!caseExists) {
      return;
    }

    const url = new URL(window.location.href);

    url.searchParams.set(CASE_QUERY_PARAMETER, slug);

    url.hash = "";

    window.history.pushState(
      {
        caseSlug: slug,
      },
      "",
      `${url.pathname}${url.search}`,
    );

    setSelectedCaseSlug(slug);
  };

  const handleBackToWork = () => {
    const url = new URL(window.location.href);

    url.searchParams.delete(CASE_QUERY_PARAMETER);

    url.hash = "case-studies";

    window.history.pushState(
      null,
      "",
      `${url.pathname}${url.search}${url.hash}`,
    );

    setSelectedCaseSlug(null);
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-background text-foreground antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        {!selectedStudy ? <Navigation /> : null}

        <main
          ref={mainRef}
          id="main-content"
          tabIndex={-1}
          className="focus:outline-none"
        >
          {selectedStudy ? (
            <CaseStudyPage
              study={selectedStudy}
              nextStudy={nextStudy}
              onBack={handleBackToWork}
              onNext={
                nextStudy
                  ? () => handleSelectCase(nextStudy.slug)
                  : undefined
              }
            />
          ) : (
            <>
              <Hero />

              <CaseStudies onSelectCase={handleSelectCase} />

              <About />
              <DesignSystem />
              <Process />
              <Contact />
            </>
          )}
        </main>
      </div>
    </MotionConfig>
  );
}
