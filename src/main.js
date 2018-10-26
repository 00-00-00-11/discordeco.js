var Sqlite = require('sqlite3').verbose();
var lodash = require('lodash'); //eslint-disable-line no-unused-vars
const makeError = require('makeerror'); //eslint-disable-line
const InputError = makeError('InputError'); //eslint-disable-line no-unused-vars

module.exports = class DiscordEconomy {
    constructor() {
        var db = new Sqlite.Database('economy.sqlite');
        db.run("CREATE TABLE IF NOT EXISTS economy (userID TEXT, money INTEGER)");
        this.fetchBalance = (ID) => { //eslint-disable-line no-unused-vars
            if (!ID) return new InputError('Please input user ID to fetch the balance');
            if (isNaN(ID)) return new InputError('Invalid ID');
        };
    }
};