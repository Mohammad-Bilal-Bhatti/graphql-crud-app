import { UpdatePostInput } from './../dto/input/update-post.dto';
import { CreatePostInput } from './../dto/input/create-post.dto';
import { Post } from './../model/post.model';
import { Injectable } from '@nestjs/common';
import { FindByIdArg } from '../dto/args/find-by-id.dto';
import { DeletePostInput } from '../dto/input/delete-post.dto';

@Injectable()
export class PostService {

  private posts: Post[];
  private nextId: number;

  constructor() {
    this.posts = [
      { id: 1, title: 'Introduction to Nest', content: '...' },
      { id: 2, title: 'Intorudction to Docker', content: '...' },
      { id: 3, title: 'Introduction to GraphQl', content: '...' },
    ];
    this.nextId = 4;
  }

  findAll(): Post[] {
    return this.posts;
  }

  findById(input: FindByIdArg): Post {
    const post = this.posts.find((a) => a.id == input.id);
    return post;
  }

  create(input: CreatePostInput): Post {
    const post: Post = { id: this.nextId++, ...input };
    this.posts.push(post);
    return post;
  }

  update(input: UpdatePostInput): Post {
    const index = this.posts.findIndex((p) => p.id == input.id);
    const post = this.posts[index];
    if (!post) return null;

    Object.assign(post, input);
    this.posts.splice(index, 1, post);
    return post;
  }

  delete(input: DeletePostInput): Post {
    const index = this.posts.findIndex((p) => p.id == input.id);
    const post = this.posts[index];
    this.posts.splice(index, 1);
    return post;
  }
}