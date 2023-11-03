import { Service } from '@sap/cds';
import { Inject, SRV, ServiceLogic } from '@dxfrontier/cds-ts-dispatcher';
import { type BookStat } from '../util/types/entities/CatalogService';
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
