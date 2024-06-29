import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type UserQueryWhereInput = {
  id?: StringFilter;
  queryText?: StringNullableFilter;
  queryType?: "Option1";
  response?: StringNullableFilter;
  userId?: StringNullableFilter;
};
