import {
  caseStudies,
  type CaseStudy,
} from "../data/caseStudies";
import type { PortfolioLanguage } from "./LanguageContext";
import { caseStudyPtBROverrides } from "./caseStudyPtBR";

export type DeepPartial<T> = T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends object
    ? { [K in keyof T]?: DeepPartial<T[K]> }
    : T;

function deepMerge<T>(base: T, override: DeepPartial<T> | undefined): T {
  if (override === undefined) {
    return base;
  }

  if (Array.isArray(base) && Array.isArray(override)) {
    return base.map((item, index) =>
      deepMerge(item, override[index]),
    ) as T;
  }

  if (
    base &&
    override &&
    typeof base === "object" &&
    typeof override === "object" &&
    !Array.isArray(base) &&
    !Array.isArray(override)
  ) {
    const result = { ...(base as Record<string, unknown>) };

    for (const [key, value] of Object.entries(
      override as Record<string, unknown>,
    )) {
      result[key] = deepMerge(
        (base as Record<string, unknown>)[key],
        value as never,
      );
    }

    return result as T;
  }

  return override as T;
}

export function getLocalizedCaseStudies(
  language: PortfolioLanguage,
): CaseStudy[] {
  if (language === "en") {
    return caseStudies;
  }

  return caseStudies.map((study) =>
    deepMerge(study, caseStudyPtBROverrides[study.slug]),
  );
}
