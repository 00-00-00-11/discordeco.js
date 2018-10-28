var Sqlite = require('sqlite3').verbose();
var lodash = require('lodash'); //eslint-disable-line no-unused-vars
const makeError = require('makeerror'); //eslint-disable-line
const InputError = makeError('InputError'); //eslint-disable-line no-unused-vars

module.exports = class DiscordEconomy {
    constructor(opt) {
        if (opt) {
            var defaultBalance = lodash.toNumber(opt); //eslint-disable-line
        } else {
            var defaultBalance = 0; //eslint-disable-line
        }
        var db = new Sqlite.Database('economy.sqlite');
        db.run("CREATE TABLE IF NOT EXISTS economy (userID TEXT, money INTEGER)");

        //begin of functions

        this.fetchBalance = (ID) => { //eslint-disable-line no-unused-vars
            const fetchBalance = new Promise((resolve) => {
                if (!ID) return new InputError('Please input user ID to fetch the balance');
                if (isNaN(ID)) return new InputError('Invalid ID');

                function getBalance(ID) {
                    db.get(`SELECT * FROM economy WHERE userID = '${ID}'`, (err, row) => { //eslint-disable-line
                        if (!row) {
                            insertFirstMoney(ID); //eslint-disable-line
                        } else {
                            resolveDB(row);
                        }
                    });
                }
                getBalance(ID);

                function resolveDB(data) {
                    return resolve(lodash.toNumber(data.money)) //eslint-disable-line
                }

                function insertFirstMoney(userID) {
                    var stmt = db.prepare(`INSERT INTO economy (userID, money) VALUES (?,?)`);
                    stmt.run(userID, defaultBalance);
                    return getBalance(ID);
                }
            });
            return fetchBalance;
        };

        this.setBalance = (ID, money) => {
            //TODO: DO THIS
        };

        //end of functions
    }
};