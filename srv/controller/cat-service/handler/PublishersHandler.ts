/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Publisher } from '#cds-models/CatalogService';

import {
  AfterRead,
  EntityHandler,
  Inject,
  Request,
  Service,
  SingleInstanceCapable,
  SRV,
} from '@dxfrontier/cds-ts-dispatcher';

import BookService from '../../../service/BookService';

@EntityHandler(Publisher)
export class PublishersHandler {
  @Inject(SRV) private readonly srv: Service;
  @Inject(BookService) private readonly bookService: BookService;

  @AfterRead()
  @SingleInstanceCapable()
  private async addDiscount(results: Publisher[], req: Request, isSingleInstance: boolean) {
    req.reject(400, 'OnError');
  }
}
