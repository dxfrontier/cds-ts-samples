// This is an automatically generated file. Please do not change its contents manually!
import * as _ from './../../..';
import * as __ from './../../../_';
import * as _sap_common from './../../common';
export function _BookAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class Book extends _._managedAspect(Base) {
    declare ID?: number
    declare title?: string | null
    declare descr?: string | null
    declare stock?: number | null
    declare price?: number | null
    /**
    * Type for an association to Currencies
    * 
    * See https://cap.cloud.sap/docs/cds/common#type-currency
    */
    declare currency?: _.Currency | null
    declare currency_code?: string | null
    declare image?: Buffer | string | {value: import("stream").Readable, $mediaContentType: string, $mediaContentDispositionFilename?: string, $mediaContentDispositionType?: string} | null
    declare author?: __.Association.to<Author> | null
    declare author_ID?: number | null
    declare genre?: __.Association.to<Genre> | null
    declare genre_ID?: number | null
    declare reviews?: __.Association.to.many<Reviews>
    declare stats?: __.Association.to<BookStat> | null
    declare bookFormats?: __.Association.to.many<BookFormats>
    declare bookRecomanddations?: __.Association.to.many<BookRecommendations>
      declare static readonly actions: typeof _.managed.actions & Record<never, never>
  };
}
export class Book extends _BookAspect(__.Entity) {}
Object.defineProperty(Book, 'name', { value: 'sap.capire.bookshop.Books' })
Object.defineProperty(Book, 'is_singular', { value: true })
export class Books extends Array<Book> {$count?: number}
Object.defineProperty(Books, 'name', { value: 'sap.capire.bookshop.Books' })

export function _PublisherAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class Publisher extends _._managedAspect(Base) {
    declare ID?: number
    declare name?: string | null
      declare static readonly actions: typeof _.managed.actions & Record<never, never>
  };
}
export class Publisher extends _PublisherAspect(__.Entity) {}
Object.defineProperty(Publisher, 'name', { value: 'sap.capire.bookshop.Publishers' })
Object.defineProperty(Publisher, 'is_singular', { value: true })
export class Publishers extends Array<Publisher> {$count?: number}
Object.defineProperty(Publishers, 'name', { value: 'sap.capire.bookshop.Publishers' })

export function _BookStatAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class BookStat extends _._managedAspect(Base) {
    declare ID?: number
    declare views?: number | null
    declare averageRating?: number | null
    declare book?: __.Association.to<Book> | null
    declare book_ID?: number | null
      declare static readonly actions: typeof _.managed.actions & Record<never, never>
  };
}
export class BookStat extends _BookStatAspect(__.Entity) {}
Object.defineProperty(BookStat, 'name', { value: 'sap.capire.bookshop.BookStats' })
Object.defineProperty(BookStat, 'is_singular', { value: true })
export class BookStats extends Array<BookStat> {$count?: number}
Object.defineProperty(BookStats, 'name', { value: 'sap.capire.bookshop.BookStats' })

export function _AuthorAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class Author extends _._managedAspect(Base) {
    declare ID?: number
    declare name?: string | null
    declare dateOfBirth?: __.CdsDate | null
    declare dateOfDeath?: __.CdsDate | null
    declare placeOfBirth?: string | null
    declare placeOfDeath?: string | null
    declare books?: __.Association.to.many<Books>
      declare static readonly actions: typeof _.managed.actions & Record<never, never>
  };
}
export class Author extends _AuthorAspect(__.Entity) {}
Object.defineProperty(Author, 'name', { value: 'sap.capire.bookshop.Authors' })
Object.defineProperty(Author, 'is_singular', { value: true })
export class Authors extends Array<Author> {$count?: number}
Object.defineProperty(Authors, 'name', { value: 'sap.capire.bookshop.Authors' })

export function _GenreAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class Genre extends _sap_common._CodeListAspect(Base) {
    declare ID?: number
    declare parent?: __.Association.to<Genre> | null
    declare parent_ID?: number | null
    declare children?: __.Composition.of.many<Genres>
      declare static readonly actions: typeof _sap_common.CodeList.actions & Record<never, never>
  };
}
export class Genre extends _GenreAspect(__.Entity) {}
Object.defineProperty(Genre, 'name', { value: 'sap.capire.bookshop.Genres' })
Object.defineProperty(Genre, 'is_singular', { value: true })
export class Genres extends Array<Genre> {$count?: number}
Object.defineProperty(Genres, 'name', { value: 'sap.capire.bookshop.Genres' })

export function _ReviewAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class Review extends _._managedAspect(Base) {
    declare ID?: number
    declare book?: __.Association.to<Book> | null
    declare book_ID?: number | null
    declare reviewer?: __.Association.to<User> | null
    declare reviewer_ID?: number | null
    declare rating?: number | null
    declare comment?: string | null
      declare static readonly actions: typeof _.managed.actions & Record<never, never>
  };
}
export class Review extends _ReviewAspect(__.Entity) {}
Object.defineProperty(Review, 'name', { value: 'sap.capire.bookshop.Reviews' })
Object.defineProperty(Review, 'is_singular', { value: true })
export class Reviews extends Array<Review> {$count?: number}
Object.defineProperty(Reviews, 'name', { value: 'sap.capire.bookshop.Reviews' })

export function _BookEventAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class BookEvent extends _._managedAspect(_._cuidAspect(Base)) {
    declare name?: string | null
    declare types?: _.BookTypes | null
      declare static readonly actions: typeof _.cuid.actions & typeof _.managed.actions & Record<never, never>
  };
}
export class BookEvent extends _BookEventAspect(__.Entity) {static drafts: typeof BookEvent}
Object.defineProperty(BookEvent, 'name', { value: 'sap.capire.bookshop.BookEvents' })
Object.defineProperty(BookEvent, 'is_singular', { value: true })
export class BookEvents extends Array<BookEvent> {static drafts: typeof BookEvent
$count?: number}
Object.defineProperty(BookEvents, 'name', { value: 'sap.capire.bookshop.BookEvents' })

export function _BookSaleAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class BookSale extends _._managedAspect(_._cuidAspect(Base)) {
    declare saleDate?: __.CdsDate | null
    declare saleAmount?: number | null
    declare quantity?: number | null
    declare book?: __.Association.to<Book> | null
    declare book_ID?: number | null
    declare customer?: __.Association.to<User> | null
    declare customer_ID?: number | null
      declare static readonly actions: typeof _.cuid.actions & typeof _.managed.actions & Record<never, never>
  };
}
export class BookSale extends _BookSaleAspect(__.Entity) {}
Object.defineProperty(BookSale, 'name', { value: 'sap.capire.bookshop.BookSales' })
Object.defineProperty(BookSale, 'is_singular', { value: true })
export class BookSales extends Array<BookSale> {$count?: number}
Object.defineProperty(BookSales, 'name', { value: 'sap.capire.bookshop.BookSales' })

export function _UserAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class User extends _._managedAspect(Base) {
    declare ID?: number
    declare username?: string | null
    declare email?: string | null
    declare role?: _.Roles | null
    declare reviews?: __.Association.to.many<Reviews>
      declare static readonly actions: typeof _.managed.actions & Record<never, never>
  };
}
export class User extends _UserAspect(__.Entity) {}
Object.defineProperty(User, 'name', { value: 'sap.capire.bookshop.Users' })
Object.defineProperty(User, 'is_singular', { value: true })
export class Users extends Array<User> {$count?: number}
Object.defineProperty(Users, 'name', { value: 'sap.capire.bookshop.Users' })

export function _UserActivityLogAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class UserActivityLog extends _._managedAspect(Base) {
    declare ID?: number
    declare actionType?: string | null
      declare static readonly actions: typeof _.managed.actions & Record<never, never>
  };
}
export class UserActivityLog extends _UserActivityLogAspect(__.Entity) {static drafts: typeof UserActivityLog}
Object.defineProperty(UserActivityLog, 'name', { value: 'sap.capire.bookshop.UserActivityLog' })
Object.defineProperty(UserActivityLog, 'is_singular', { value: true })
export class UserActivityLog_ extends Array<UserActivityLog> {static drafts: typeof UserActivityLog
$count?: number}
Object.defineProperty(UserActivityLog_, 'name', { value: 'sap.capire.bookshop.UserActivityLog' })

export function _PromotionAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class Promotion extends Base {
    declare ID?: number
    declare name?: string | null
    declare description?: string | null
    declare startDate?: __.CdsDate | null
    declare endDate?: __.CdsDate | null
    declare discount?: number | null
    declare books?: __.Association.to.many<Books>
      declare static readonly actions: Record<never, never>
  };
}
export class Promotion extends _PromotionAspect(__.Entity) {static drafts: typeof Promotion}
Object.defineProperty(Promotion, 'name', { value: 'sap.capire.bookshop.Promotions' })
Object.defineProperty(Promotion, 'is_singular', { value: true })
export class Promotions extends Array<Promotion> {static drafts: typeof Promotion
$count?: number}
Object.defineProperty(Promotions, 'name', { value: 'sap.capire.bookshop.Promotions' })

export function _BookOrderAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class BookOrder extends _._managedAspect(Base) {
    declare ID?: number
    declare orderNumber?: string | null
    declare orderDate?: __.CdsDate | null
    declare totalAmount?: number | null
    declare status?: string | null
    declare customer?: __.Association.to<User> | null
    declare customer_ID?: number | null
      declare static readonly actions: typeof _.managed.actions & Record<never, never>
  };
}
export class BookOrder extends _BookOrderAspect(__.Entity) {}
Object.defineProperty(BookOrder, 'name', { value: 'sap.capire.bookshop.BookOrders' })
Object.defineProperty(BookOrder, 'is_singular', { value: true })
export class BookOrders extends Array<BookOrder> {$count?: number}
Object.defineProperty(BookOrders, 'name', { value: 'sap.capire.bookshop.BookOrders' })

export function _BookRecommendationAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class BookRecommendation extends _._managedAspect(Base) {
    declare ID?: number
    declare rating?: number | null
    declare comment?: string | null
    declare description?: string | null
    declare book?: __.Association.to<Book> | null
    declare book_ID?: number | null
    declare recommended?: __.Association.to<Book> | null
    declare recommended_ID?: number | null
      declare static readonly actions: typeof _.managed.actions & Record<never, never>
  };
}
export class BookRecommendation extends _BookRecommendationAspect(__.Entity) {}
Object.defineProperty(BookRecommendation, 'name', { value: 'sap.capire.bookshop.BookRecommendations' })
Object.defineProperty(BookRecommendation, 'is_singular', { value: true })
export class BookRecommendations extends Array<BookRecommendation> {$count?: number}
Object.defineProperty(BookRecommendations, 'name', { value: 'sap.capire.bookshop.BookRecommendations' })

export function _BookFormatAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class BookFormat extends _._managedAspect(Base) {
    declare ID?: number
    declare format?: string | null
    declare price?: number | null
    declare pages?: number | null
    declare language?: string | null
    declare publicationDate?: __.CdsDate | null
    declare book?: __.Association.to<Book> | null
    declare book_ID?: number | null
      declare static readonly actions: typeof _.managed.actions & Record<never, never>
  };
}
export class BookFormat extends _BookFormatAspect(__.Entity) {}
Object.defineProperty(BookFormat, 'name', { value: 'sap.capire.bookshop.BookFormats' })
Object.defineProperty(BookFormat, 'is_singular', { value: true })
export class BookFormats extends Array<BookFormat> {$count?: number}
Object.defineProperty(BookFormats, 'name', { value: 'sap.capire.bookshop.BookFormats' })
