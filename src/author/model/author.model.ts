import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Post } from 'src/post/model/post.model';

@ObjectType({ description: 'Author Model' })
export class Author {
  @Field(() => Int, { description: 'author id' })
  id: number;

  @Field({ description: 'author name' })
  name: string;

  @Field({ description: 'author surname' })
  surname: string;

  @Field(() => [Post], { description: 'author posts' })
  posts: Post[];
}
