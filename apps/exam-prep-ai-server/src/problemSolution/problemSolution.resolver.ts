import * as graphql from "@nestjs/graphql";
import { ProblemSolutionResolverBase } from "./base/problemSolution.resolver.base";
import { ProblemSolution } from "./base/ProblemSolution";
import { ProblemSolutionService } from "./problemSolution.service";

@graphql.Resolver(() => ProblemSolution)
export class ProblemSolutionResolver extends ProblemSolutionResolverBase {
  constructor(protected readonly service: ProblemSolutionService) {
    super(service);
  }
}
