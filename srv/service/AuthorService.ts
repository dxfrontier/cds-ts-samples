import type { BookStat } from '#cds-models/CatalogService';
import { Inject, SRV, ServiceLogic, Service } from '@dxfrontier/cds-ts-dispatcher';
import { type ActionRequest } from '@dxfrontier/cds-ts-dispatcher';

@ServiceLogic()
class AuthorService {
  @Inject(SRV) private readonly srv: Service;

  public async notifyAuthor(req: ActionRequest<typeof BookStat.actions.NotifyAuthor>) {
    // do something with data
    return true;
  }
}

export default AuthorService;
