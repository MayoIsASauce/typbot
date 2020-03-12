"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//#region chalk
const chalk = require("chalk");
const fatal = chalk.bgRed.black;
const exception = chalk.red.underline.bold;
const info = chalk.grey.italic;
const warn = chalk.bgYellow.black;
const warning = chalk.yellow.italic.underline;
const good = chalk.bgGreen.black;
const goodInfo = chalk.green.underline;
var lastCall;
function error(errorType, errorCategory) {
    if (errorCategory === "Fatal") {
        lastCall = "Fatal";
        if (errorType === "Naming") {
            console.warn(fatal("Fatal") + exception(" Duplicate Naming Exception"));
            console.warn(fatal.red("Fatal") + chalk.rgb(163, 0, 0).bold(" Code: ") + info("e1900"));
            console.warn(fatal.red("Fatal") + chalk.rgb(163, 0, 0).bold(" Archived: ") + info("True"));
            console.warn(fatal.red("Fatal") + chalk.rgb(163, 0, 0).bold(" Description: ") + info("Username already exists"));
        }
        else if (errorType === "User") {
            console.warn(fatal("Fatal") + exception(" Duplicate User Exception"));
            console.warn(fatal.red("Fatal") + info(" Duplicate user profile found"));
        }
        else if (errorType === "IDdup") {
            console.warn(fatal("Fatal") + exception(" Duplicate ID Exception"));
        }
        else if (errorType === "Strikes") {
            console.warn(fatal("Fatal") + exception(" Warnings Exception"));
            console.warn(fatal.red("Fatal") + info(" Recieved +10 warnings, address the issue and try again"));
        }
        console.warn(fatal.red("Fatal") + info(" Detailed Descripition is available under ") + chalk.rgb(212, 97, 97).underline("README.md"));
        abortmsg();
    }
    else if (errorCategory === "Warn") {
        lastCall = "Warn";
        if (errorType === "Naming") {
            console.warn(warn("Warn") + warning(" Duplicate Naming Warning"));
            return console.warn(warn.yellow("Warn") + info(" User with the same username exists"));
        }
        else if (errorType === "User") {
            console.warn(warn("Warn") + warning(" Duplicate User Warning"));
            return console.warn(warn.yellow("Warn") + info(" Duplicate user profile found"));
        }
        else if (errorType === "IDdup") {
            return console.warn(warn("Warn") + warning(" Duplicate ID Warning"));
        }
        else if (errorType === "Strikes") {
            console.warn(fatal("Fatal") + exception(" Invalid Combination Exception"));
            console.warn(fatal.red("Fatal") + info(" ErrorType 'Strikes' cannot be combined with category 'Warn'"));
            abortmsg();
        }
    }
}
exports.error = error;
function abortmsg() {
    if (lastCall === "Fatal") {
        console.warn(fatal.red(`Fatal`) + info(" Aborting...\n"));
        return process.exit();
    }
    else if (lastCall === "Warn") {
        console.warn(fatal(`Fatal`) + info(" Aborting...\n"));
        return process.exit();
    }
}
exports.abortmsg = abortmsg;
function success(Finished, flag) {
    if (Finished === "Stored" && flag === undefined) {
        console.warn(warn("Warn") + warning(" No ID Warning"));
        console.warn(warn("Warn") + info(" ID wasnt passed through success"));
        return;
    }
    else if (Finished === "Stored" && typeof flag === "string") {
        console.log(good('Good') + goodInfo(" Stored Account"));
        console.log(good.green('Good') + chalk.greenBright.bold(" ID: ") + info(flag));
        return;
    }
}
exports.success = success;
function sleep(milliseconds) {
    const start = Date.now();
    let current = null;
    do {
        current = Date.now();
    } while (current - start < milliseconds);
    return;
}
exports.sleep = sleep;
