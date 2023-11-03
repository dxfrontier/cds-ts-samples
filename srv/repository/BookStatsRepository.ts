import { Repository } from '@dxfrontier/cds-ts-dispatcher';
import { BaseRepository } from '@dxfrontier/cds-ts-repository';

import { Book, type BookStat } from '../util/types/entities/CatalogService';

@Repository()
class BookStatsRepository extends BaseRepository<BookStat> {
  constructor() {
    super(Book);
  }
  // ... define custom CDS-QL actions if BaseRepository ones are not satisfying your needs !
}

export default BookStatsRepository;
