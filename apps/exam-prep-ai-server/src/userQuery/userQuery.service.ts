import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserQueryServiceBase } from "./base/userQuery.service.base";

@Injectable()
export class UserQueryService extends UserQueryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
