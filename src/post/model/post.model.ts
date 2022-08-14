import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'Post Model' })
export class Post {
  @Field(() => Int, { description: 'post id' })
  id: number;

  @Field(() => Int, { description: 'post author id' })
  authorId: number;

  @Field({ description: 'post title' })
  title: string;

  @Field({ description: 'post content' })
  content: string;

  @Field(() => Int, {
    description: 'post likes count',
    defaultValue: 0,
    nullable: true,
  })
  likes?: number;
}
