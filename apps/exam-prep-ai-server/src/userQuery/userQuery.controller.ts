import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UserQueryService } from "./userQuery.service";
import { UserQueryControllerBase } from "./base/userQuery.controller.base";

@swagger.ApiTags("userQueries")
@common.Controller("userQueries")
export class UserQueryController extends UserQueryControllerBase {
  constructor(protected readonly service: UserQueryService) {
    super(service);
  }
}
