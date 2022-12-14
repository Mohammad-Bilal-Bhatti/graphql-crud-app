import { DeleteAuthorInput } from './../dto/input/delete-author.dto';
import { UpdateAuthorInput } from './../dto/input/update-author.dto';
import { CreateAuthorInput } from './../dto/input/create-author.dto';
import { Injectable } from '@nestjs/common';
import { Author } from '../model/author.model';
import { FindByIdArg } from '../dto/args/find-by-id.dto';
import { Post } from 'src/post/model/post.model';

@Injectable()
export class AuthorService {
  private authors: Author[];
  private nextId: number;

  constructor() {
    this.authors = [
      { id: 1, name: 'Talha', surname: 'Bhatti', posts: null },
      { id: 2, name: 'Fahad', surname: 'Khan', posts: null },
      { id: 3, name: 'Nandlal', surname: 'Khatri', posts: null },
    ];
    this.nextId = 4;
  }

  findAll(skip: number, limit: number): Author[] {
    return this.authors.slice(skip, skip + limit);
  }

  findById(input: FindByIdArg): Author {
    const author = this.authors.find((a) => a.id == input.id);
    return author;
  }

  create(input: CreateAuthorInput): Author {
    const author: Author = { id: this.nextId++, posts: null, ...input };
    this.authors.push(author);
    return author;
  }

  update(input: UpdateAuthorInput): Author {
    const index = this.authors.findIndex((a) => a.id == input.id);
    const author = this.authors[index];
    if (!author) return null;

    Object.assign(author, input);
    this.authors.splice(index, 1, author);
    return author;
  }

  delete(input: DeleteAuthorInput): Author {
    const index = this.authors.findIndex((a) => a.id == input.id);
    const author = this.authors[index];
    this.authors.splice(index, 1);
    return author;
  }
}
