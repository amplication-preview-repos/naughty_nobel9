import { Module } from "@nestjs/common";
import { ProblemSolutionModuleBase } from "./base/problemSolution.module.base";
import { ProblemSolutionService } from "./problemSolution.service";
import { ProblemSolutionController } from "./problemSolution.controller";
import { ProblemSolutionResolver } from "./problemSolution.resolver";

@Module({
  imports: [ProblemSolutionModuleBase],
  controllers: [ProblemSolutionController],
  providers: [ProblemSolutionService, ProblemSolutionResolver],
  exports: [ProblemSolutionService],
})
export class ProblemSolutionModule {}
