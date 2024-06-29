import * as graphql from "@nestjs/graphql";
import { UserQueryResolverBase } from "./base/userQuery.resolver.base";
import { UserQuery } from "./base/UserQuery";
import { UserQueryService } from "./userQuery.service";

@graphql.Resolver(() => UserQuery)
export class UserQueryResolver extends UserQueryResolverBase {
  constructor(protected readonly service: UserQueryService) {
    super(service);
  }
}
