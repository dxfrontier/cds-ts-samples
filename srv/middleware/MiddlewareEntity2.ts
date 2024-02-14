import { type TypedRequest } from '@sap/cds';
import { type MiddlewareImpl, type Next } from '@dxfrontier/cds-ts-dispatcher';
import { type Book } from '#cds-models/CatalogService';

export class MiddlewareEntity2 implements MiddlewareImpl {
  public async use(req: TypedRequest<Book>, next: Next) {
    console.log('Middleware entity 2 : EXECUTED');

    req.notify('Middleware2');

    next();
  }
}
