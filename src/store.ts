import * as fs from 'fs'
import * as path from 'path'
import { v4 as uuidv4 } from 'uuid'
import { error, abortmsg, sleep, success } from './helper'
import chalk = require('chalk')
let fileraw = fs.readFileSync(path.join(__dirname + '/../res/accounts.json'), { encoding: 'utf-8' })
const data: object = JSON.parse(fileraw)
export interface account {
    username: string,
    password: string,
    id: string,
    keys?: any[]
}
export interface accStruct {
    id: string,
    meta: {
        username: string,
        password: string
    }
}
export function storeAcc(user: accStruct) {
    let abort = false
    let safe = true
    let errEpochs = 0
    do {
        if (errEpochs > 10) {
            error("Strikes", "Fatal")
            abort = true
            break
        }
        errEpochs++
        safe = true
        data["users"].forEach(k => {
            if (!safe) {
                return
            }
            else if (k === user) {
                error("User", "Fatal")
                return
            }
            else if (k["meta"]["username"] === user.meta.username) { 
                error("Naming", "Fatal")
                return
            }
            else if (k["id"] === user.id) {
                error("IDdup", "Warn")
                let temp =  user.id
                user.id = uuidv4()
                console.warn(chalk.bgYellow.yellow('Warn') + chalk.yellow.italic(' old ') + chalk.grey(`${temp}`) + chalk.yellow(' --> ') + chalk.yellow.italic('new ') + `${user.id}\n`)
                safe = false
                sleep(1000)
                return
            } else {
                safe = true
            }
        })
    } while (!safe);

    if (abort) {
        abortmsg()
        return
    }
    data["users"].push(user)
    let x = JSON.stringify(data);
    fs.writeFileSync(path.join(__dirname + '/../res/accounts.json'), x, { encoding: 'utf-8' })
    success("Stored", user.id)
}