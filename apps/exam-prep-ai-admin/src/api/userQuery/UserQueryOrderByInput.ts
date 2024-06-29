import { SortOrder } from "../../util/SortOrder";

export type UserQueryOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  queryText?: SortOrder;
  queryType?: SortOrder;
  response?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
