/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, UserQuery as PrismaUserQuery } from "@prisma/client";

export class UserQueryServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.UserQueryCountArgs, "select">
  ): Promise<number> {
    return this.prisma.userQuery.count(args);
  }

  async userQueries(
    args: Prisma.UserQueryFindManyArgs
  ): Promise<PrismaUserQuery[]> {
    return this.prisma.userQuery.findMany(args);
  }
  async userQuery(
    args: Prisma.UserQueryFindUniqueArgs
  ): Promise<PrismaUserQuery | null> {
    return this.prisma.userQuery.findUnique(args);
  }
  async createUserQuery(
    args: Prisma.UserQueryCreateArgs
  ): Promise<PrismaUserQuery> {
    return this.prisma.userQuery.create(args);
  }
  async updateUserQuery(
    args: Prisma.UserQueryUpdateArgs
  ): Promise<PrismaUserQuery> {
    return this.prisma.userQuery.update(args);
  }
  async deleteUserQuery(
    args: Prisma.UserQueryDeleteArgs
  ): Promise<PrismaUserQuery> {
    return this.prisma.userQuery.delete(args);
  }
}
