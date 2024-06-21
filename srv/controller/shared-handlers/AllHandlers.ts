import { AfterRead, CDS_DISPATCHER, EntityHandler, Req, Results } from '@dxfrontier/cds-ts-dispatcher';
import type { TypedRequest } from '@dxfrontier/cds-ts-dispatcher';

@EntityHandler(CDS_DISPATCHER.ALL_ENTITIES)
class AllHandlers {
  @AfterRead()
  private async all(@Req() req: TypedRequest<unknown>, @Results() results: unknown): Promise<void> {
    console.log('Triggering READ for all entities ...');
  }
}

export default AllHandlers;
