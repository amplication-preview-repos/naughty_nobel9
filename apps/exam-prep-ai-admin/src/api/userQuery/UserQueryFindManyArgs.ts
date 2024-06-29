import { UserQueryWhereInput } from "./UserQueryWhereInput";
import { UserQueryOrderByInput } from "./UserQueryOrderByInput";

export type UserQueryFindManyArgs = {
  where?: UserQueryWhereInput;
  orderBy?: Array<UserQueryOrderByInput>;
  skip?: number;
  take?: number;
};
