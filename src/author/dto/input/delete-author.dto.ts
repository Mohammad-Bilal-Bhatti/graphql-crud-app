import { IsNotEmpty } from 'class-validator';
import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class DeleteAuthorInput {
  @Field(() => Int)
  @IsNotEmpty()
  id: number;
}
