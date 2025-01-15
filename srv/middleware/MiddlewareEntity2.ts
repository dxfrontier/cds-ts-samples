import type { Book } from '#cds-models/CatalogService';
import type { MiddlewareImpl, NextMiddleware, TypedRequest } from '@dxfrontier/cds-ts-dispatcher';

export class MiddlewareEntity2 implements MiddlewareImpl {
  public async use(req: TypedRequest<Book>, next: NextMiddleware) {
    console.log('Middleware entity 2 : EXECUTED');

    req.notify('Middleware2');

    await next();
  }
}
