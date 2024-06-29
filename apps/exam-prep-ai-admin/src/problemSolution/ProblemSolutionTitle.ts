import { ProblemSolution as TProblemSolution } from "../api/problemSolution/ProblemSolution";

export const PROBLEMSOLUTION_TITLE_FIELD = "subject";

export const ProblemSolutionTitle = (record: TProblemSolution): string => {
  return record.subject?.toString() || String(record.id);
};
