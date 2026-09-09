import type { CaseStudy } from "../data/caseStudies";
import type { DeepPartial } from "./localizedCaseStudies";
import { ledgerflowPtBR } from "./cases/ledgerflowPtBR";
import { insightflowPtBR } from "./cases/insightflowPtBR";
import { unifateciePtBR } from "./cases/unifateciePtBR";

export const caseStudyPtBROverrides: Record<
  string,
  DeepPartial<CaseStudy>
> = {
  "ledgerflow-accounting-platform": ledgerflowPtBR,
  "insightflow-research-intelligence": insightflowPtBR,
  "unifatecie-student-onboarding": unifateciePtBR,
};
