import { CDSDispatcher } from '@dxfrontier/cds-ts-dispatcher';

import ProductHandler from './handler/ProductHandler';

export = new CDSDispatcher([
  // Entities
  ProductHandler,
]).initialize();
