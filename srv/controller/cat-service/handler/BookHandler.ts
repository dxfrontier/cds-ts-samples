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
  BeforeRead,
  Use,
} from '@dxfrontier/cds-ts-dispatcher';
import BookService from '../../../service/BookService';
import { Book } from '#cds-models/CatalogService';
import { MiddlewareMethodAfterRead1 } from '../../../middleware/MiddlewareAfterRead1';
import { MiddlewareMethodAfterRead2 } from '../../../middleware/MiddlewareAfterRead2';
import { MiddlewareMethodBeforeRead } from '../../../middleware/MiddlewareBeforeRead';
import { MiddlewareEntity1 } from '../../../middleware/MiddlewareEntity1';
import { MiddlewareEntity2 } from '../../../middleware/MiddlewareEntity2';

@EntityHandler(Book)
@Use(MiddlewareEntity1, MiddlewareEntity2)
class BookHandler {
  @Inject(SRV) private readonly srv: Service;
  @Inject(BookService) private readonly bookService: BookService;

  @AfterCreate()
  private async validateCurrencyCodes(result: Book, req: Request) {
    this.bookService.validateData(result, req);
  }

  @BeforeRead()
  @Use(MiddlewareMethodBeforeRead)
  private async bla(req: Request) {
    console.log('****************** Before read event');
  }

  @AfterRead()
  @SingleInstanceCapable()
  @Use(MiddlewareMethodAfterRead1, MiddlewareMethodAfterRead2)
  private async addDiscount(results: Book[], req: Request, isSingleInstance: boolean) {
    await this.srv.emit('OrderedBook', { book: 'dada', quantity: 3, buyer: req.user.id });

    if (isSingleInstance) {
      req.notify('Single instance');
    } else {
      req.notify('Entity set');
    }

    this.bookService.enrichTitle(results);
  }

  @AfterUpdate()
  private async addDefaultDescription(result: Book, req: TypedRequest<Book>) {
    void this.bookService.addDefaultTitleText(result, req);
  }

  @AfterDelete()
  private async deleteItem(deleted: boolean, req: Request) {
    req.notify(`Item deleted : ${deleted}`);
  }
}

export default BookHandler;
