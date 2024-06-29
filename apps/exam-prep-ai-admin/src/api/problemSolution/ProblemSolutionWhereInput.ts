import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ProblemSolutionWhereInput = {
  gradeLevel?: IntNullableFilter;
  id?: StringFilter;
  problemText?: StringNullableFilter;
  solutionText?: StringNullableFilter;
  subject?: StringNullableFilter;
};
