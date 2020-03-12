"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const store_1 = require("./store");
const secure_1 = require("./secure");
let user = {
    username: "Officefan60429",
    password: "Stevie0909",
    id: uuid_1.v4()
};
let newUser = secure_1.createNew(user);
store_1.storeAcc(newUser);
