let user = {
    username: "Tommy",
    password: "test123",
    keys: [true, "string", 10]
};
function accPrinter(u) {
    console.log("Username: " + u.username);
    console.log("Password: " + u.password);
    console.log("Keys: " + u.keys.join(', '));
    return;
}
accPrinter(user);
