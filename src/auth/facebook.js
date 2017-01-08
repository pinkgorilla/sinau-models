"use strict";

var BaseModel = require("model-toolkit").BaseModel;

module.exports = class Facebook extends BaseModel {
    constructor(source) {
        super("facebook", "1.0.0");

        // Define properties.  
        this.id = "";
        this.copy(source);
    }
};
