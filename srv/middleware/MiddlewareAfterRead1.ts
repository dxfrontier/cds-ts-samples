import type { Book } from '#cds-models/CatalogService';

import type { MiddlewareImpl, NextMiddleware, Request } from '@dxfrontier/cds-ts-dispatcher';

export class MiddlewareMethodAfterRead1 implements MiddlewareImpl {
  public async use(req: Request<Book>, next: NextMiddleware): Promise<void> {
    console.log('Middleware 1: @AfterRead');

    await next();
  }
}
