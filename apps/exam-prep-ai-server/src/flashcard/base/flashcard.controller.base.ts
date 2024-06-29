/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { FlashcardService } from "../flashcard.service";
import { FlashcardCreateInput } from "./FlashcardCreateInput";
import { Flashcard } from "./Flashcard";
import { FlashcardFindManyArgs } from "./FlashcardFindManyArgs";
import { FlashcardWhereUniqueInput } from "./FlashcardWhereUniqueInput";
import { FlashcardUpdateInput } from "./FlashcardUpdateInput";

export class FlashcardControllerBase {
  constructor(protected readonly service: FlashcardService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Flashcard })
  async createFlashcard(
    @common.Body() data: FlashcardCreateInput
  ): Promise<Flashcard> {
    return await this.service.createFlashcard({
      data: data,
      select: {
        content: true,
        createdAt: true,
        gradeLevel: true,
        id: true,
        subject: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Flashcard] })
  @ApiNestedQuery(FlashcardFindManyArgs)
  async flashcards(@common.Req() request: Request): Promise<Flashcard[]> {
    const args = plainToClass(FlashcardFindManyArgs, request.query);
    return this.service.flashcards({
      ...args,
      select: {
        content: true,
        createdAt: true,
        gradeLevel: true,
        id: true,
        subject: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Flashcard })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async flashcard(
    @common.Param() params: FlashcardWhereUniqueInput
  ): Promise<Flashcard | null> {
    const result = await this.service.flashcard({
      where: params,
      select: {
        content: true,
        createdAt: true,
        gradeLevel: true,
        id: true,
        subject: true,
        title: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Flashcard })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateFlashcard(
    @common.Param() params: FlashcardWhereUniqueInput,
    @common.Body() data: FlashcardUpdateInput
  ): Promise<Flashcard | null> {
    try {
      return await this.service.updateFlashcard({
        where: params,
        data: data,
        select: {
          content: true,
          createdAt: true,
          gradeLevel: true,
          id: true,
          subject: true,
          title: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Flashcard })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteFlashcard(
    @common.Param() params: FlashcardWhereUniqueInput
  ): Promise<Flashcard | null> {
    try {
      return await this.service.deleteFlashcard({
        where: params,
        select: {
          content: true,
          createdAt: true,
          gradeLevel: true,
          id: true,
          subject: true,
          title: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
