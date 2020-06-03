import RefreshController from '../inc/refresh-controller';
import RequestHandler from '../inc/request-handler';
import BaseScheme from './_scheme';
declare const DEFAULTS: {
    name: string;
    accessType: any;
    redirectUri: any;
    logoutRedirectUri: any;
    clientId: any;
    audience: any;
    grantType: any;
    responseMode: any;
    acrValues: any;
    autoLogout: boolean;
    endpoints: {
        logout: string;
        authorization: string;
        token: string;
        userInfo: string;
    };
    scope: any[];
    token: {
        property: string;
        type: string;
        name: string;
        maxAge: number;
        global: boolean;
    };
    refreshToken: {
        property: string;
        maxAge: number;
    };
    responseType: string;
    codeChallengeMethod: string;
};
export default class Oauth2Scheme extends BaseScheme<typeof DEFAULTS> {
    req: any;
    name: any;
    refreshController: RefreshController;
    requestHandler: RequestHandler;
    constructor($auth: any, options: any);
    get _scope(): string;
    get _redirectURI(): any;
    get _logoutRedirectURI(): any;
    _updateTokens(response: any): void;
    _checkStatus(): void;
    mounted(): Promise<any>;
    check(): boolean;
    reset(): void;
    _generateRandomString(): string;
    _sha256(plain: any): PromiseLike<ArrayBuffer>;
    _base64UrlEncode(str: any): string;
    _pkceChallengeFromVerifier(v: any, hashValue: any): Promise<any>;
    login(_opts?: {
        state?: any;
        params?: any;
        nonce?: any;
    }): Promise<void>;
    logout(): any;
    fetchUser(): Promise<void>;
    _handleCallback(): Promise<boolean>;
    refreshTokens(): Promise<import("..").HTTPResponse>;
}
export {};
