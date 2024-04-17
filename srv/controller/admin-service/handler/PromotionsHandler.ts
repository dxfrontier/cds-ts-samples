/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Promotion } from '#cds-models/AdminService';

import {
  AfterDeleteDraft,
  AfterEditDraft,
  AfterNewDraft,
  AfterSaveDraft,
  EntityHandler,
  Inject,
  Req,
  Result,
  Service,
  SRV,
} from '@dxfrontier/cds-ts-dispatcher';

import type { TypedRequest } from '@dxfrontier/cds-ts-dispatcher';

@EntityHandler(Promotion)
class PromotionHandler {
  @Inject(SRV) private readonly srv: Service;

  @AfterNewDraft()
  public async afterNewDraft(@Result() result: Promotion, @Req() req: TypedRequest<Promotion>): Promise<void> {
    req.notify(201, 'After new draft executed');
  }

  @AfterSaveDraft()
  public async afterSaveDraft(@Result() result: Promotion, @Req() req: TypedRequest<Promotion>): Promise<void> {
    req.notify(201, 'After save draft executed');
  }

  @AfterEditDraft()
  public async afterEditDraft(@Result() result: Promotion, @Req() req: TypedRequest<Promotion>): Promise<void> {
    req.notify(201, 'After edit draft executed');
  }

  @AfterDeleteDraft()
  public async afterDeleteDraft(@Result() deleted: boolean, @Req() req: TypedRequest<Promotion>): Promise<void> {
    // ...
  }
}

export default PromotionHandler;
