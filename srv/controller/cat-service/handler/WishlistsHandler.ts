/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import {
  AfterRead,
  CDS_DISPATCHER,
  EntityHandler,
  CatchAndSetErrorMessage,
  Inject,
  Req,
  Results,
  Service,
} from '@dxfrontier/cds-ts-dispatcher';
import { Wishlist } from '../../../../@cds-models/CatalogService';
import axios from 'axios';

@EntityHandler(Wishlist)
class WishlistsHandler {
  @Inject(CDS_DISPATCHER.SRV) private readonly srv: Service;

  @AfterRead()
  @CatchAndSetErrorMessage('Error in after read', 'BAD_REQUEST-400')
  private async afterRead(@Req() req: Request, @Results() results: Wishlist[]): Promise<void> {
    await axios.get('https://jsonplaceholder.typicode');
  }
}

export default WishlistsHandler;
