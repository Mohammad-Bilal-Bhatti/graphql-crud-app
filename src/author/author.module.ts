import { AuthorService } from './service/author.service';
import { Module } from '@nestjs/common';
import { AuthorResolver } from './author.resolver';
import { PostModule } from 'src/post/post.module';

@Module({
  imports: [PostModule],
  providers: [AuthorService, AuthorResolver]
})
export class AuthorModule {}
