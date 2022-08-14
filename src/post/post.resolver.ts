import { UpdatePostInput } from './dto/input/update-post.dto';
import { CreatePostInput } from './dto/input/create-post.dto';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { FindByIdArg } from './dto/args/find-by-id.dto';
import { Post } from './model/post.model';
import { PostService } from './service/post.service';
import { DeletePostInput } from './dto/input/delete-post.dto';
@Resolver(() => Post)
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  @Query(() => [Post], {
    name: 'posts',
    nullable: 'items',
    description: 'find all posts',
  })
  findAllPosts(): Post[] {
    return this.postService.findAll();
  }

  @Query(() => Post, {
    name: 'post',
    nullable: true,
    description: 'find post by id',
  })
  findPostById(@Args() input: FindByIdArg): Post {
    return this.postService.findById(input);
  }

  @Mutation(() => Post, { name: 'createPost', description: 'create new post' })
  createPost(@Args('createPostInput') input: CreatePostInput): Post {
    return this.postService.create(input);
  }

  @Mutation(() => Post, { name: 'updatePost', description: 'update post' })
  updatePost(@Args('updatePostInput') input: UpdatePostInput): Post {
    return this.postService.update(input);
  }

  @Mutation(() => Post, { name: 'deletePost', description: 'delete post' })
  deletePost(@Args('deletePostInput') input: DeletePostInput): Post {
    return this.postService.delete(input);
  }

  @Mutation(() => Post, { name: 'likePost', description: 'update post count' })
  likePost(@Args('postId', { type: () => Int }) postId: number) {
    return this.postService.likePost(postId);
  }
}
