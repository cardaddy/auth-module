import type { Auth } from '../';
import TokenStatus from './token-status';
import RequestHandler from './request-handler';
export default class Token {
    private $auth;
    requestHandler: RequestHandler;
    constructor($auth: Auth);
    _getExpiration(): any;
    _setExpiration(expiration: any): any;
    _syncExpiration(): any;
    _updateExpiration(token: any): any;
    _setToken(token: any): any;
    _syncToken(): any;
    get(): any;
    set(tokenValue: any): any;
    sync(): any;
    reset(): void;
    status(): TokenStatus;
}
