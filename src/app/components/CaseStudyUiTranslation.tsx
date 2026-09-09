import { useEffect } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { copy } from "../i18n/copy";

function normalize(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

export function CaseStudyUiTranslation() {
  const { language } = useLanguage();

  useEffect(() => {
    const root = document.getElementById("main-content");

    if (!root) {
      return;
    }

    const en = copy.en.casePage as Record<string, string>;
    const pt = copy["pt-BR"].casePage as Record<string, string>;
    const source = language === "pt-BR" ? en : pt;
    const target = language === "pt-BR" ? pt : en;

    const replacements = Object.keys(source)
      .map((key) => [source[key], target[key]] as const)
      .filter(([from, to]) => Boolean(from) && from !== to)
      .sort((a, b) => b[0].length - a[0].length);

    const replaceValue = (value: string) => {
      const normalized = normalize(value);

      for (const [from, to] of replacements) {
        if (normalized === normalize(from)) {
          return to;
        }
      }

      let nextValue = value;

      for (const [from, to] of replacements) {
        if (nextValue.includes(from)) {
          nextValue = nextValue.replaceAll(from, to);
        }
      }

      return nextValue;
    };

    const translateElement = (element: Element) => {
      for (const attribute of ["aria-label", "title"]) {
        const value = element.getAttribute(attribute);
        if (!value) continue;

        const translated = replaceValue(value);
        if (translated !== value) {
          element.setAttribute(attribute, translated);
        }
      }
    };

    const translateTree = () => {
      const walker = document.createTreeWalker(
        root,
        NodeFilter.SHOW_TEXT,
      );
      const textNodes: Text[] = [];

      while (walker.nextNode()) {
        textNodes.push(walker.currentNode as Text);
      }

      for (const textNode of textNodes) {
        const value = textNode.nodeValue;
        if (!value || !normalize(value)) continue;

        const translated = replaceValue(value);
        if (translated !== value) {
          textNode.nodeValue = translated;
        }
      }

      root.querySelectorAll("[aria-label], [title]").forEach(translateElement);
    };

    const frame = window.requestAnimationFrame(translateTree);
    const observer = new MutationObserver(() => {
      window.requestAnimationFrame(translateTree);
    });

    observer.observe(root, {
      childList: true,
      subtree: true,
    });

    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [language]);

  return null;
}
