import { SortOrder } from "../../util/SortOrder";

export type FlashcardOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  gradeLevel?: SortOrder;
  id?: SortOrder;
  subject?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
