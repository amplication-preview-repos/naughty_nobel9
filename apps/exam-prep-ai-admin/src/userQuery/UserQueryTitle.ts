import { UserQuery as TUserQuery } from "../api/userQuery/UserQuery";

export const USERQUERY_TITLE_FIELD = "userId";

export const UserQueryTitle = (record: TUserQuery): string => {
  return record.userId?.toString() || String(record.id);
};
