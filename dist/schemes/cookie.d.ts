import LocalScheme from './local';
export default class CookieScheme extends LocalScheme {
    constructor($auth: any, options: any);
    mounted(): Promise<any>;
    check(): boolean;
    login(endpoint: any): Promise<import("..").HTTPResponse>;
    reset(): void;
}
