import { Author } from './model/author.model';
import { AuthorService } from './service/author.service';
export class AuthorResolver {

  constructor(private readonly authorService: AuthorService) {}

  findAllAuthors(): Author[] {
    return this.authorService.findAll();
  }

  findAuthorById(): Author {
    return this.authorService.findById();
  }

  createAuthor(): Author {
    return this.authorService.create();
  }

  updateAuthor(): Author {
    return this.authorService.update();
  }

  deleteAuthor(): Author {
    return this.authorService.delete();
  }
}
