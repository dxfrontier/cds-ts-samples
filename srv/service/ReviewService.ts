import type { Review } from '#cds-models/CatalogService';
import { Inject, SRV, ServiceLogic, type TypedRequest, type Service } from '@dxfrontier/cds-ts-dispatcher';

@ServiceLogic()
class ReviewService {
  @Inject(SRV) private readonly srv: Service;

  validateComment(req: TypedRequest<Review>) {
    if (req.data.comment != null) {
      if (req.data.comment?.length < 10) {
        req.reject(400, 'Message must be larger than 10');
      }
    }
  }
}

export default ReviewService;
