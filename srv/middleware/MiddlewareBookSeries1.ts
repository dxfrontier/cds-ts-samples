import type { BookSeries } from '#cds-models/CatalogService';
import { CatchAndSetErrorMessage } from '@dxfrontier/cds-ts-dispatcher';

import type { MiddlewareImpl, NextMiddleware, Request } from '@dxfrontier/cds-ts-dispatcher';

export class MiddlewareBookSeries1 implements MiddlewareImpl {
  @CatchAndSetErrorMessage('Second middleware must throw error !', 'BAD_REQUEST-400')
  public async use(req: Request<BookSeries>, next: NextMiddleware): Promise<void> {
    console.log('Middleware 1: BookSeries executed');

    await next();
  }
}
