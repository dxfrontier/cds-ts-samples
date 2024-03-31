import { BookStat } from '#cds-models/CatalogService';

import {
  EntityHandler,
  Inject,
  OnBoundAction,
  OnBoundFunction,
  OnCreate,
  OnDelete,
  OnRead,
  OnUpdate,
  SingleInstanceCapable,
  SRV,
} from '@dxfrontier/cds-ts-dispatcher';

import AuthorRepository from '../../../repository/AuthorRepository';
import AuthorService from '../../../service/AuthorService';
import BookStatsService from '../../../service/BookStatsService';

import type { Request, Service, TypedRequest, ActionRequest, ActionReturn } from '@dxfrontier/cds-ts-dispatcher';

@EntityHandler(BookStat)
class BookStatsHandler {
  @Inject(SRV) private readonly srv: Service;
  @Inject(BookStatsService) private readonly bookStatsService: BookStatsService;
  @Inject(AuthorService) private readonly authorService: AuthorService;
  @Inject(AuthorRepository) private readonly authorRepository: AuthorRepository;

  @OnCreate()
  public async onCreateMethod(req: TypedRequest<BookStat>, next: Function) {
    req.notify(201, 'On Create executed');
    return next();
  }

  @OnRead()
  @SingleInstanceCapable()
  public async onReadMethod(req: TypedRequest<BookStat>, next: Function, isSingleInstance: boolean) {
    if (isSingleInstance) {
      return await this.bookStatsService.updatedViews(req);
    }

    return next();
  }

  @OnUpdate()
  public async onUpdateMethod(req: TypedRequest<BookStat>, next: Function) {
    req.notify(201, 'On update executed');
    return next();
  }

  @OnDelete()
  public async onDeleteMethod(req: Request, _: Function) {
    req.notify('Item deleted');
  }

  // This action will be triggered on the 'BookStat' entity
  @OnBoundAction(BookStat.actions.GenerateReport)
  public async onBoundActionMethod(
    req: ActionRequest<typeof BookStat.actions.GenerateReport>,
    _: Function,
  ): ActionReturn<typeof BookStat.actions.GenerateReport> {
    return await this.bookStatsService.handleReport(req);
  }

  // This function will be triggered on the 'BookStat' entity
  @OnBoundFunction(BookStat.actions.NotifyAuthor)
  public async onBoundFunctionMethod(
    req: ActionRequest<typeof BookStat.actions.NotifyAuthor>,
    _: Function,
  ): ActionReturn<typeof BookStat.actions.NotifyAuthor> {
    return await this.authorService.notifyAuthor(req);
  }
}

export default BookStatsHandler;
