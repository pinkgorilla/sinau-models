"use strict";

var BaseModel = require("model-toolkit").BaseModel;
var Profile = require("./profile");

module.exports = class Account extends BaseModel {
    constructor(source) {
        super("account", "1.0.0");

        // Define properties.  
        this.username = "";
        this.password = "";
        this.email = "";
        this.displayName = "";
        this.picture = "";
        this.isLocked = false;
        this.profile = new Profile();
        this.roles = [];
        this.kind = "";
        this.facebook = {};
        this.google = {};

        this.copy(source);
        this.profile = new Profile(this.profile);
    }
};
