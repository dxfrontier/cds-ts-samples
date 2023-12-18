import { UserActivityLog } from '#cds-models/AdminService';
import {
  AfterRead,
  EntityHandler,
  Inject,
  SRV,
  SingleInstanceCapable,
  type Request,
  type Service,
} from '@dxfrontier/cds-ts-dispatcher';

@EntityHandler(UserActivityLog)
class UserActivityLogHandler {
  @Inject(SRV) private readonly srv: Service;

  @AfterRead()
  @SingleInstanceCapable()
  public async afterReadDraftMethod(results: UserActivityLog[], req: Request, isSingleInstance: boolean) {
    // handle single instance
    if (results.length === 0) {
      return;
    }

    if (isSingleInstance) {
      req.notify('Single instance');
    }

    // handle entity set
  }
}

export default UserActivityLogHandler;
