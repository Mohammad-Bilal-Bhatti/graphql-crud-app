import { ArgsType, Field, Int } from '@nestjs/graphql';

@ArgsType()
export class FindByIdArg {
  @Field(() => Int)
  id: number;
}
