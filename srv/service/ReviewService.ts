import { Inject, SRV, ServiceLogic, type TypedRequest, type Service } from '@dxfrontier/cds-ts-dispatcher';
import { type Review } from '../util/types/entities/CatalogService';

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
