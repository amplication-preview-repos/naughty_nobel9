import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProblemSolutionServiceBase } from "./base/problemSolution.service.base";

@Injectable()
export class ProblemSolutionService extends ProblemSolutionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
