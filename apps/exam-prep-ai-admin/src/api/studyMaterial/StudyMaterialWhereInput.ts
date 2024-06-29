import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type StudyMaterialWhereInput = {
  content?: StringNullableFilter;
  gradeLevel?: IntNullableFilter;
  id?: StringFilter;
  subject?: StringNullableFilter;
  title?: StringNullableFilter;
};
