import { Post } from './model/post.model';
import { PostService } from './service/post.service';
export class PostResolver {

  constructor(private readonly postService: PostService) {}

  findAllPosts(): Post[] {
    return this.postService.findAll();
  }

  findPostById(): Post {
    return this.postService.findById();
  }

  createPost(): Post {
    return this.postService.create();
  }

  updatePost(): Post {
    return this.postService.update();
  }

  deletePost(): Post {
    return this.postService.delete();
  }
}
