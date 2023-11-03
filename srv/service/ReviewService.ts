import { Service } from '@sap/cds';
import { Inject, SRV, ServiceLogic } from '@dxfrontier/cds-ts-dispatcher';
import { type Review } from '../util/types/entities/CatalogService';
import { type TypedRequest } from '@dxfrontier/cds-ts-dispatcher';

@ServiceLogic()
class ReviewService {
  @Inject(SRV) private readonly srv: Service;

  validateComment(req: TypedRequest<Review>) {
    if (req.data.comment !== undefined && req.data.comment?.length < 10) {
      req.reject(400, 'Message must be larger than 10');
    }
  }
}

export default ReviewService;
