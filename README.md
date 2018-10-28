# discordeco.js
A Simple Package for Economy system in discord bots!

[![N|Solid](https://nodei.co/npm/discordeco.js.png?downloads=true&stars=false)](https://www.npmjs.org/package/discordeco.js)

NOTE: This Package is still in development, please report any issue or bug on [this](https://github.com/Hazmi35/discordeco.js/issues) site

## Installation
```
npm install discordeco.js
```

## Usage
```js
const Economy = require("discordeco.js");

const eco = new Eco();

eco.fetchBalance('userID').then(money => {
    console.log(money);
});

eco.updateBalance('userID', 5000).then(newBalance => {
    console.log(money);
});
```