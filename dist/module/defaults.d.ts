declare const _default: {
    resetOnError: boolean;
    scopeKey: string;
    rewriteRedirects: boolean;
    fullPathRedirect: boolean;
    watchLoggedIn: boolean;
    redirect: {
        login: string;
        logout: string;
        home: string;
        callback: string;
    };
    vuex: {
        namespace: string;
    };
    cookie: {
        prefix: string;
        options: {
            path: string;
        };
    };
    localStorage: {
        prefix: string;
    };
    token: {
        prefix: string;
    };
    tokenExpiration: {
        prefix: string;
    };
    refreshToken: {
        prefix: string;
    };
    refreshTokenExpiration: {
        prefix: string;
    };
    defaultStrategy: any;
    strategies: {};
};
export default _default;
