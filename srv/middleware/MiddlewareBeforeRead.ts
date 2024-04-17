import type { Book } from '#cds-models/CatalogService';
import type { MiddlewareImpl, NextMiddleware } from '@dxfrontier/cds-ts-dispatcher';
import type { TypedRequest } from '@sap/cds';

export class MiddlewareMethodBeforeRead implements MiddlewareImpl {
  public async use(req: TypedRequest<Book>, next: NextMiddleware) {
    console.log('Middleware 1: @BeforeRead');
    await next();
  }
}
