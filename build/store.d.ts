export interface account {
    username: string;
    password: string;
    id: string;
    keys?: any[];
}
export interface accStruct {
    id: string;
    meta: {
        username: string;
        password: string;
    };
}
export declare function storeAcc(user: accStruct): void;
