import {
  AfterCreate,
  AfterDelete,
  AfterRead,
  AfterUpdate,
  EntityHandler,
  Inject,
  SRV,
  SingleInstanceCapable,
  type TypedRequest,
  type Request,
  type Service,
} from '@dxfrontier/cds-ts-dispatcher';
import BookService from '../../../service/BookService';
import { Book } from '#cds-models/CatalogService';

@EntityHandler(Book)
class BookHandler {
  @Inject(SRV) private readonly srv: Service;
  @Inject(BookService) private readonly bookService: BookService;

  @AfterCreate()
  private async validateCurrencyCodes(result: Book, req: Request) {
    this.bookService.validateData(result, req);
  }

  @AfterRead()
  @SingleInstanceCapable()
  private async addDiscount(results: Book[], req: Request, isSingleInstance: boolean) {
    if (isSingleInstance) {
      req.notify('Single instance');
    } else {
      req.notify('Entity set');
    }

    this.bookService.enrichTitle(results);
  }

  @AfterUpdate()
  private async addDefaultDescription(result: Book, req: TypedRequest<Book>) {
    await this.bookService.addDefaultTitleText(result, req);
  }

  @AfterDelete()
  private async deleteItem(deleted: boolean, req: Request) {
    req.notify(`Item deleted : ${deleted}`);
  }
}

export default BookHandler;
