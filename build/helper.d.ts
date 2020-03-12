declare type err = "Naming" | "User" | "IDdup" | "Strikes";
declare type errCat = "Fatal" | "Warn";
declare type fin = "Stored";
export declare function error(errorType: err, errorCategory: errCat): void;
export declare function abortmsg(): void;
export declare function success(Finished: fin, flag?: any): void;
export declare function sleep(milliseconds: number): void;
export {};
