import { CDSDispatcher } from '@dxfrontier/cds-ts-dispatcher';
import BookEventsHandler from './handler/BookEventsHandler';
import BookHandler from './handler/BookHandler';
import BookStatsHandler from './handler/BookStatsHandler';
import ReviewHandler from './handler/ReviewHandler';
import UnboundActionsHandler from './handler/UnboundActions';
import { BookOrdersHandler } from './handler/BookOrdersHandler';

export = new CDSDispatcher([
  // Entities
  BookHandler,
  ReviewHandler,
  BookStatsHandler,
  BookOrdersHandler,
  // Draft
  BookEventsHandler,
  // Unbound actions
  UnboundActionsHandler,
]).initialize();
