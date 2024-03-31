// This is an automatically generated file. Please do not change its contents manually!
import * as _ from './..';
import * as __ from './../_';
import * as _sap_capire_bookshop from './../sap/capire/bookshop';
export default { name: 'AdminService' }
export function _UserActivityLogAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class UserActivityLog extends Base {
        createdAt?: string | null;
    /**
    * Canonical user ID
    */
        createdBy?: _.User | null;
        modifiedAt?: string | null;
    /**
    * Canonical user ID
    */
        modifiedBy?: _.User | null;
        ID?: number;
        actionType?: string | null;
      static actions: {
      }
  };
}
export class UserActivityLog extends _._managedAspect(_UserActivityLogAspect(__.Entity)) {}
Object.defineProperty(UserActivityLog, 'name', { value: 'AdminService.UserActivityLog' })
export class UserActivityLog_ extends Array<UserActivityLog> {}
Object.defineProperty(UserActivityLog_, 'name', { value: 'AdminService.UserActivityLog' })

export function _UserAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class User extends Base {
        createdAt?: string | null;
    /**
    * Canonical user ID
    */
        createdBy?: _.User | null;
        modifiedAt?: string | null;
    /**
    * Canonical user ID
    */
        modifiedBy?: _.User | null;
        ID?: number;
        username?: string | null;
        email?: string | null;
        role?: _.Roles | null;
        reviews?: __.Association.to.many<_sap_capire_bookshop.Reviews>;
      static actions: {
      }
  };
}
export class User extends _._managedAspect(_UserAspect(__.Entity)) {}
Object.defineProperty(User, 'name', { value: 'AdminService.Users' })
export class Users extends Array<User> {}
Object.defineProperty(Users, 'name', { value: 'AdminService.Users' })

// function
export declare const sendMail: { (request: _.HelloRequest | null): _.HelloResponse | null, __parameters: {request: _.HelloRequest | null}, __returns: _.HelloResponse | null };