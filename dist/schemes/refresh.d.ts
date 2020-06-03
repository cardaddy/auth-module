import RefreshController from '../inc/refresh-controller';
import LocalScheme from './local';
export default class RefreshScheme extends LocalScheme {
    refreshController: RefreshController;
    constructor($auth: any, options: any);
    _updateTokens(response: any): void;
    _checkStatus(): void;
    mounted(): Promise<any>;
    check(): boolean;
    refreshTokens(): Promise<import("..").HTTPResponse>;
    reset({ resetInterceptor }?: {
        resetInterceptor?: boolean;
    }): void;
}
