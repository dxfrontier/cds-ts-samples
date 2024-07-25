 
import { Inject, Service, ServiceLogic, SRV } from '@dxfrontier/cds-ts-dispatcher';

@ServiceLogic()
class BookOrdersService {
  @Inject(SRV) private readonly srv: Service;

  public showBeforeReadNotify() {
    console.log('****************** Before read event');
  }
}

export default BookOrdersService;
