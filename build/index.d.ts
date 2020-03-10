interface account {
    username: string;
    password: string;
    keys?: any[];
}
declare let user: account;
declare function accPrinter(u: account): void;
