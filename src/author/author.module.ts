import { AuthorService } from './service/author.service';
import { Module } from '@nestjs/common';
import { AuthorResolver } from './author.resolver';

@Module({
  providers: [AuthorService, AuthorResolver]
})
export class AuthorModule {}
