import { ProblemSolutionWhereInput } from "./ProblemSolutionWhereInput";
import { ProblemSolutionOrderByInput } from "./ProblemSolutionOrderByInput";

export type ProblemSolutionFindManyArgs = {
  where?: ProblemSolutionWhereInput;
  orderBy?: Array<ProblemSolutionOrderByInput>;
  skip?: number;
  take?: number;
};
