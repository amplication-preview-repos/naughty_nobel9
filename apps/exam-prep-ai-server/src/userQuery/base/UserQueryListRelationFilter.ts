/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { UserQueryWhereInput } from "./UserQueryWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class UserQueryListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => UserQueryWhereInput,
  })
  @ValidateNested()
  @Type(() => UserQueryWhereInput)
  @IsOptional()
  @Field(() => UserQueryWhereInput, {
    nullable: true,
  })
  every?: UserQueryWhereInput;

  @ApiProperty({
    required: false,
    type: () => UserQueryWhereInput,
  })
  @ValidateNested()
  @Type(() => UserQueryWhereInput)
  @IsOptional()
  @Field(() => UserQueryWhereInput, {
    nullable: true,
  })
  some?: UserQueryWhereInput;

  @ApiProperty({
    required: false,
    type: () => UserQueryWhereInput,
  })
  @ValidateNested()
  @Type(() => UserQueryWhereInput)
  @IsOptional()
  @Field(() => UserQueryWhereInput, {
    nullable: true,
  })
  none?: UserQueryWhereInput;
}
export { UserQueryListRelationFilter as UserQueryListRelationFilter };
