# discordeco.js
A Simple Package for an Economy system in discord bots!

<div align="center">
    <p>
    <a href="https://npmjs.com/package/discordeco.js"><img src="https://nodei.co/npm/discordeco.js.png?downloads=true&stars=false"/></a>
    </p>
</div>

NOTE: This Package is still in development, please report any issue or bug on [this](https://github.com/Hazmi35/discordeco.js/issues) site

## Installation
```
npm install discordeco.js
```

## Usage
```js
const Economy = require("discordeco.js"); //Import Economy package

const eco = new Economy('1000'); //NOTE : 1000 on this line is a default balance

eco.fetchBalance('userID').then(money => { //Fetches balance from an userID
    console.log(money); //log the money
});

eco.updateBalance('userID', 5000).then(newBalance => { //note : .then(newBalance => { is optional
    console.log(newBalance);
});
```
