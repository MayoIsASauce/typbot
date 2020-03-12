"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const m = require("md5");
function createNew(user) {
    user.password = m(user.password);
    let acc = {
        id: user.id,
        meta: {
            username: user.username,
            password: user.password
        }
    };
    return acc;
}
exports.createNew = createNew;
