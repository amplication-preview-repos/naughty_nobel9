import { SortOrder } from "../../util/SortOrder";

export type StudyMaterialOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  gradeLevel?: SortOrder;
  id?: SortOrder;
  subject?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
