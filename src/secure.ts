import { account, accStruct } from './store'
import * as m from 'md5'
export function createNew(user: account): accStruct {
    user.password = m(user.password)
    let acc: accStruct = {
        id: user.id,
        meta: {
            username: user.username,
            password: user.password
        }
    }
    return acc
}