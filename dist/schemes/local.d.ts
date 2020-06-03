import RequestHandler from '../inc/request-handler';
import type { SchemeOptions, HTTPRequest } from '../';
import BaseScheme from './_scheme';
declare const DEFAULTS: SchemeOptions;
export default class LocalScheme extends BaseScheme<typeof DEFAULTS> {
    requestHandler: RequestHandler;
    constructor($auth: any, options: any, ...defaults: any[]);
    _updateTokens(response: any): void;
    _checkStatus(): void;
    mounted({ refreshEndpoint }?: {
        refreshEndpoint?: any;
    }): Promise<any>;
    check(): boolean;
    login(endpoint: any, { reset, refreshEndpoint }?: {
        reset?: boolean;
        refreshEndpoint?: any;
    }): Promise<import("..").HTTPResponse>;
    setUserToken(tokenValue: any): Promise<void | import("..").HTTPResponse>;
    fetchUser(endpoint?: any): Promise<void | import("..").HTTPResponse>;
    logout(endpoint?: HTTPRequest): Promise<any>;
    reset({ resetInterceptor }?: {
        resetInterceptor?: boolean;
    }): void;
}
export {};
