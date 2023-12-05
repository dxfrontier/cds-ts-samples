import {
  Inject,
  SRV,
  ServiceLogic,
  type Service,
  type ActionRequest,
  type TypedRequest,
} from '@dxfrontier/cds-ts-dispatcher';
import { type BookStat } from '../util/types/entities/CatalogService';
import BookStatsRepository from '../repository/BookStatsRepository';
import BookRepository from '../repository/BookRepository';

@ServiceLogic()
class BookStatsService {
  @Inject(SRV) private readonly srv: Service;
  @Inject(BookStatsRepository) private readonly bookStatsRepository: BookStatsRepository;
  @Inject(BookRepository) private readonly bookRepository: BookRepository;

  public async updatedViews(req: TypedRequest<BookStat>) {
    await this.bookStatsRepository.update({ ID: 2 }, { views: 444233 });
    return await this.bookStatsRepository.getAll();
  }

  public async getUpdatedBook(req: ActionRequest<typeof BookStat.actions.GenerateReport>) {
    return await this.bookRepository.findOne({ ID: req.data.ID });
  }

  public async handleReport(req: ActionRequest<typeof BookStat.actions.GenerateReport>) {
    const statsID = req.params[0] as string;

    const bookStats = await this.bookStatsRepository.findOne({ ID: parseInt(statsID) });
    const book = await this.bookRepository.findOne({ ID: bookStats!.book_ID });

    // You can check with 'if statement' if not-null (!) operator is not ok for you case
    // if (book == null) {
    //   // Handle the case where book is null
    //   return req.reject(4004, 'item not found');
    // }

    return {
      book: book!.title,
      rating: bookStats!.averageRating,
      stats: bookStats!.views,
    };
  }
}

export default BookStatsService;
