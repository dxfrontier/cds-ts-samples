import { CDSDispatcher } from '@dxfrontier/cds-ts-dispatcher';
import UserActivityLogHandler from './handler/UserActivityLogHandler';

module.exports = new CDSDispatcher([UserActivityLogHandler]).initialize();
