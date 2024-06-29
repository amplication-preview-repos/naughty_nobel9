import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProblemSolutionService } from "./problemSolution.service";
import { ProblemSolutionControllerBase } from "./base/problemSolution.controller.base";

@swagger.ApiTags("problemSolutions")
@common.Controller("problemSolutions")
export class ProblemSolutionController extends ProblemSolutionControllerBase {
  constructor(protected readonly service: ProblemSolutionService) {
    super(service);
  }
}
