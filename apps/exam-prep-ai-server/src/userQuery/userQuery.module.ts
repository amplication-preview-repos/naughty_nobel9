import { Module } from "@nestjs/common";
import { UserQueryModuleBase } from "./base/userQuery.module.base";
import { UserQueryService } from "./userQuery.service";
import { UserQueryController } from "./userQuery.controller";
import { UserQueryResolver } from "./userQuery.resolver";

@Module({
  imports: [UserQueryModuleBase],
  controllers: [UserQueryController],
  providers: [UserQueryService, UserQueryResolver],
  exports: [UserQueryService],
})
export class UserQueryModule {}
