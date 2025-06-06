import type { BookSeries } from '#cds-models/CatalogService';
import { CatchAndSetErrorMessage } from '@dxfrontier/cds-ts-dispatcher';

import type { MiddlewareImpl, NextMiddleware, Request } from '@dxfrontier/cds-ts-dispatcher';

import axios from 'axios';

export class MiddlewareBookSeries2 implements MiddlewareImpl {
  @CatchAndSetErrorMessage('A new error message from MiddlewareBookSeries2', 'BAD_REQUEST-400')
  public async use(req: Request<BookSeries>, next: NextMiddleware): Promise<void> {
    console.log('Middleware 2: BookSeries executed');

    await axios.get('https://jsonplaceholder.typicode');

    await next();
  }
}
