import type { TypedRequest } from '@sap/cds';
import type { MiddlewareImpl, NextMiddleware } from '@dxfrontier/cds-ts-dispatcher';
import type { Book } from '#cds-models/CatalogService';

export class MiddlewareEntity1 implements MiddlewareImpl {
  public async use(req: TypedRequest<Book>, next: NextMiddleware) {
    console.log('Middleware entity 1 : EXECUTED');

    await next();
  }
}
