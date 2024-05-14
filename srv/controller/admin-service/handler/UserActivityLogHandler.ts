import {
  BeforeDeleteDraft,
  BeforeEditDraft,
  BeforeNewDraft,
  BeforeSaveDraft,
  EntityHandler,
  Inject,
  Req,
  Service,
  SRV,
} from '@dxfrontier/cds-ts-dispatcher';

import { UserActivityLog } from '#cds-models/AdminService';

import type { TypedRequest } from '@dxfrontier/cds-ts-dispatcher';

@EntityHandler(UserActivityLog)
class UserActivityLogHandler {
  @Inject(SRV) private readonly srv: Service;

  @BeforeNewDraft()
  public async beforeNewDraft(@Req() req: TypedRequest<UserActivityLog>): Promise<void> {
    req.notify(201, 'Before new draft executed');
  }

  @BeforeSaveDraft()
  public async beforeSaveDraft(@Req() req: TypedRequest<UserActivityLog>): Promise<void> {
    req.notify(201, 'Before save draft executed');
  }

  @BeforeEditDraft()
  public async beforeEditDraft(@Req() req: TypedRequest<UserActivityLog>): Promise<void> {
    req.notify(201, 'Before edit draft executed');
  }

  @BeforeDeleteDraft()
  public async beforeDeleteDraft(@Req() req: TypedRequest<UserActivityLog>): Promise<void> {
    // ...
  }
}

export default UserActivityLogHandler;
