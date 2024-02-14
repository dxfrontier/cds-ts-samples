import { type TypedRequest } from '@sap/cds';
import { type MiddlewareImpl, type Next } from '@dxfrontier/cds-ts-dispatcher';
import { type Book } from '#cds-models/CatalogService';

export class MiddlewareMethodAfterRead2 implements MiddlewareImpl {
  public async use(req: TypedRequest<Book>, next: Next) {
    console.log('Middleware 2: @AfterRead');

    req.notify('MiddlewareAfterRead2');

    next();
  }
}
