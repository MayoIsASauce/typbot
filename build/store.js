"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
const uuid_1 = require("uuid");
const helper_1 = require("./helper");
const chalk = require("chalk");
let fileraw = fs.readFileSync(path.join(__dirname + '/../res/accounts.json'), { encoding: 'utf-8' });
const data = JSON.parse(fileraw);
function storeAcc(user) {
    let abort = false;
    let safe = true;
    let errEpochs = 0;
    do {
        if (errEpochs > 10) {
            helper_1.error("Strikes", "Fatal");
            abort = true;
            break;
        }
        errEpochs++;
        safe = true;
        data["users"].forEach(k => {
            if (!safe) {
                return;
            }
            else if (k === user) {
                helper_1.error("User", "Fatal");
                return;
            }
            else if (k["meta"]["username"] === user.meta.username) {
                helper_1.error("Naming", "Fatal");
                return;
            }
            else if (k["id"] === user.id) {
                helper_1.error("IDdup", "Warn");
                let temp = user.id;
                user.id = uuid_1.v4();
                console.warn(chalk.bgYellow.yellow('Warn') + chalk.yellow.italic(' old ') + chalk.grey(`${temp}`) + chalk.yellow(' --> ') + chalk.yellow.italic('new ') + `${user.id}\n`);
                safe = false;
                helper_1.sleep(1000);
                return;
            }
            else {
                safe = true;
            }
        });
    } while (!safe);
    if (abort) {
        helper_1.abortmsg();
        return;
    }
    data["users"].push(user);
    let x = JSON.stringify(data);
    fs.writeFileSync(path.join(__dirname + '/../res/accounts.json'), x, { encoding: 'utf-8' });
    helper_1.success("Stored", user.id);
}
exports.storeAcc = storeAcc;
