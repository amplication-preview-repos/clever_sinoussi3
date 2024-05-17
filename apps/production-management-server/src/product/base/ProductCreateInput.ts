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
import {
  IsString,
  IsOptional,
  IsNumber,
  ValidateNested,
} from "class-validator";
import { ProductionOrderCreateNestedManyWithoutProductsInput } from "./ProductionOrderCreateNestedManyWithoutProductsInput";
import { Type } from "class-transformer";

@InputType()
class ProductCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  price?: number | null;

  @ApiProperty({
    required: false,
    type: () => ProductionOrderCreateNestedManyWithoutProductsInput,
  })
  @ValidateNested()
  @Type(() => ProductionOrderCreateNestedManyWithoutProductsInput)
  @IsOptional()
  @Field(() => ProductionOrderCreateNestedManyWithoutProductsInput, {
    nullable: true,
  })
  productionOrders?: ProductionOrderCreateNestedManyWithoutProductsInput;
}

export { ProductCreateInput as ProductCreateInput };
