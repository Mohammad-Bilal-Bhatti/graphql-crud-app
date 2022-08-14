import { DeleteAuthorInput } from './dto/input/delete-author.dto';
import { UpdateAuthorInput } from './dto/input/update-author.dto';
import { CreateAuthorInput } from './dto/input/create-author.dto';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { FindByIdArg } from './dto/args/find-by-id.dto';
import { Author } from './model/author.model';
import { AuthorService } from './service/author.service';
@Resolver(() => Author)
export class AuthorResolver {
  constructor(private readonly authorService: AuthorService) {}

  @Query(() => [Author], {
    name: 'authors',
    nullable: 'items',
    description: 'find all authors',
  })
  findAllAuthors(): Author[] {
    return this.authorService.findAll();
  }

  @Query(() => Author, {
    name: 'author',
    nullable: true,
    description: 'find author by id',
  })
  findAuthorById(@Args() input: FindByIdArg): Author {
    return this.authorService.findById(input);
  }

  @Mutation(() => Author, {
    name: 'createAuthor',
    description: 'create author',
  })
  createAuthor(@Args('createAuthorInput') input: CreateAuthorInput): Author {
    return this.authorService.create(input);
  }

  @Mutation(() => Author, {
    name: 'updateAuthor',
    description: 'update author',
  })
  updateAuthor(@Args('updateAuthorInput') input: UpdateAuthorInput): Author {
    return this.authorService.update(input);
  }

  @Mutation(() => Author, {
    name: 'deleteAuthor',
    description: 'delete author',
  })
  deleteAuthor(@Args('deleteAuthorInput') input: DeleteAuthorInput): Author {
    return this.authorService.delete(input);
  }
}
