import { Inject, Service, ServiceLogic, SRV } from '@dxfrontier/cds-ts-dispatcher';

import BookRepository from '../repository/BookRepository';

import type { ActionRequest } from '@dxfrontier/cds-ts-dispatcher';
import type { BookStat } from '#cds-models/CatalogService';

@ServiceLogic()
class AuthorService {
  @Inject(SRV) private readonly srv: Service;
  @Inject(BookRepository) private readonly bookRepository: BookRepository;
  public async notifyAuthor(req: ActionRequest<typeof BookStat.actions.NotifyAuthor>) {
    // do something with data
    return true;
  }
}

export default AuthorService;
