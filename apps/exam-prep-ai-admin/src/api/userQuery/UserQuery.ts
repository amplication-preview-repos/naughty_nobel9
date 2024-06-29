export type UserQuery = {
  createdAt: Date;
  id: string;
  queryText: string | null;
  queryType?: "Option1" | null;
  response: string | null;
  updatedAt: Date;
  userId: string | null;
};
