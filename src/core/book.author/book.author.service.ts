import { Injectable, Logger } from '@nestjs/common';

import { BookAuthor } from './book.author.entity';
import { CommonCrudService } from 'src/common/services/common.crud.service';

@Injectable()
export class BookAuthorService extends CommonCrudService(BookAuthor) {
  constructor() {
    super();
  }
}
