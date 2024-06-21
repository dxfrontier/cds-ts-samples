import {
  BeforeCreate,
  BeforeDelete,
  BeforeRead,
  BeforeUpdate,
  CDS_DISPATCHER,
  EntityHandler,
  Inject,
  Req,
  Request,
  Service,
  SingleInstanceSwitch,
} from '@dxfrontier/cds-ts-dispatcher';

import { Review } from '#cds-models/CatalogService';
import ReviewService from '../../../service/ReviewService';

import type { TypedRequest } from '@dxfrontier/cds-ts-dispatcher';

@EntityHandler(Review)
class ReviewHandler {
  @Inject(CDS_DISPATCHER.SRV) private readonly srv: Service;
  @Inject(ReviewService) private readonly reviewService: ReviewService;

  @BeforeCreate()
  private async beforeCreate(@Req() req: TypedRequest<Review>) {
    this.reviewService.validateComment(req);
  }

  @BeforeRead()
  private async beforeRead(@Req() req: TypedRequest<Review>, @SingleInstanceSwitch() isSingleInstance: boolean) {
    this.reviewService.notifyRead(req);
  }

  @BeforeUpdate()
  private async beforeUpdate(@Req() req: TypedRequest<Review>) {
    this.reviewService.validateComment(req);
  }

  @BeforeDelete()
  private async beforeDelete(@Req() req: Request) {
    this.reviewService.notifyDelete(req);
  }
}

export default ReviewHandler;
