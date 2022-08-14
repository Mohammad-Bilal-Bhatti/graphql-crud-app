import { ArgsType, Field, Int } from '@nestjs/graphql';

@ArgsType()
export class PaginationArgs {
  @Field(() => Int, { description: 'skip items', defaultValue: 0 })
  skip: number;

  @Field(() => Int, { description: 'limit items', defaultValue: 20 })
  limit: number;
}
