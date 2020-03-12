import { v4 as uuidv4 } from 'uuid'
import { account, storeAcc } from './store'
import { createNew } from './secure'

let user: account = {
    username: "Officefan60429",
    password: "Stevie0909",
    id: uuidv4()
}

let newUser = createNew(user)
storeAcc(newUser)

