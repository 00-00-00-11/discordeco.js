var Sqlite = require('sqlite3');
var _ = require('lodash');
module.exports = class DiscordEconomy {
    constructor() {
        var db = new Sqlite.Database('economy.sqlite');
        db.run("CREATE TABLE IF NOT EXISTS economy (id INTEGER, money INTEGER)");
        this.fetchBalance = () => {
            console.log('WIP');
        }
    }
}