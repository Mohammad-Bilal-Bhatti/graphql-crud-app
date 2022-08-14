import { PostModule } from './post/post.module';
import { AuthorModule } from './author/author.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [AuthorModule, PostModule],
})
export class AppModule {}
