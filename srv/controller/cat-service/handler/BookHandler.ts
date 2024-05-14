import {
  AfterCreate,
  AfterDelete,
  AfterRead,
  AfterUpdate,
  BeforeRead,
  EntityHandler,
  GetRequest,
  Inject,
  IsColumnSupplied,
  IsPresent,
  IsRole,
  Req,
  Request,
  Result,
  Results,
  Service,
  SingleInstanceSwitch,
  SRV,
  Use,
} from '@dxfrontier/cds-ts-dispatcher';

import { Book } from '#cds-models/CatalogService';
import { MiddlewareMethodAfterRead1 } from '../../../middleware/MiddlewareAfterRead1';
import { MiddlewareMethodAfterRead2 } from '../../../middleware/MiddlewareAfterRead2';
import { MiddlewareMethodBeforeRead } from '../../../middleware/MiddlewareBeforeRead';
import { MiddlewareEntity1 } from '../../../middleware/MiddlewareEntity1';
import { MiddlewareEntity2 } from '../../../middleware/MiddlewareEntity2';
import BookService from '../../../service/BookService';

import type { TypedRequest } from '@dxfrontier/cds-ts-dispatcher';

@EntityHandler(Book)
@Use(MiddlewareEntity1, MiddlewareEntity2)
class BookHandler {
  @Inject(SRV) private readonly srv: Service;
  @Inject(BookService) private readonly bookService: BookService;

  @AfterCreate()
  private async afterCreate(@Result() result: Book, @Req() req: Request): Promise<void> {
    this.bookService.validateData(result, req);
  }

  @BeforeRead()
  @Use(MiddlewareMethodBeforeRead)
  private async beforeRead(@Req() req: TypedRequest<Book>): Promise<void> {
    this.bookService.showConsoleLog();
  }

  @AfterRead()
  @Use(MiddlewareMethodAfterRead1, MiddlewareMethodAfterRead2)
  private async afterRead(
    @Req() req: Request,
    @Results() results: Book[],
    @SingleInstanceSwitch() singleInstance: boolean,
    @IsColumnSupplied<Book>('price') hasPrice: boolean,
    @IsPresent('SELECT', 'columns') hasColumns: boolean,
    @IsRole('Developer', 'AnotherRole') role: boolean,
    @GetRequest('locale') locale: Request['locale'],
  ): Promise<void> {
    await this.bookService.manageAfterReadMethods({ req, results, singleInstance });
  }

  @AfterUpdate()
  private async afterUpdate(@Result() result: Book, @Req() req: TypedRequest<Book>): Promise<void> {
    await this.bookService.addDefaultTitleText(result, req);
  }

  @AfterDelete()
  private async afterDelete(@Result() deleted: boolean, @Req() req: Request): Promise<void> {
    this.bookService.notifyItemDeleted(req, deleted);
  }
}

export default BookHandler;
