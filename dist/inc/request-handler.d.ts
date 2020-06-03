import type { Auth, HTTPRequest } from '../';
export default class RequestHandler {
    $auth: Auth;
    interceptor: any;
    constructor(auth: Auth);
    _needToken(config: HTTPRequest): any;
    _getUpdatedRequestConfig(config: HTTPRequest): HTTPRequest;
    _requestHasAuthorizationHeader(config: HTTPRequest): boolean;
    setHeader(token: any): void;
    clearHeader(): void;
    initializeRequestInterceptor(refreshEndpoint?: string): void;
    reset(): void;
}
