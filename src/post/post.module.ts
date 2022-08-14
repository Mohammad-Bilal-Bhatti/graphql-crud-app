import { PostResolver } from './post.resolver';
import { PostService } from './service/post.service';
import { Module } from '@nestjs/common';

@Module({
  providers: [PostService, PostResolver]
})
export class PostModule {}
