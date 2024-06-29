import { SortOrder } from "../../util/SortOrder";

export type ProblemSolutionOrderByInput = {
  createdAt?: SortOrder;
  gradeLevel?: SortOrder;
  id?: SortOrder;
  problemText?: SortOrder;
  solutionText?: SortOrder;
  subject?: SortOrder;
  updatedAt?: SortOrder;
};
