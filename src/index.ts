interface account {
    username: string,
    password: string,
    keys?: any[]
}

let user: account = {
    username: "Tommy",
    password: "test123",
    keys: [true, "string", 10]
}

function accPrinter(u: account) {
    console.log("Username: " + u.username)
    console.log("Password: " + u.password)
    console.log("Keys: " + u.keys.join(', '))
    return
}

accPrinter(user)