module.exports = {
    auth: {
        Account: require("./src/auth/account"),
        Profile: require("./src/auth/profile"),
        Role: require("./src/auth/role")
    },
    map: require("./src/map"),
    validator: require("./src/validator")
};
