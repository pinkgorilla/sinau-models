module.exports = { 
    auth: {
        account: require("./auth/account-validator"),
        profile: require("./auth/profile-validator"),
        role: require("./auth/role-validator")
    }
};