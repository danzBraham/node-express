// CommonJS - every file is module (by default)
// Modules  - encapsulated code (only share minimum)
const names = require("./04-names");
const sayHi = require("./05-utils");
const data = require("./06-alternative-modules-exports");
require("./07.mind-grenade");

sayHi("Rolando");
sayHi(names.owi);
sayHi(names.abra);
console.log(data);
