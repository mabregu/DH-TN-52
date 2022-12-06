const auto = require('./auto');
const cowsay = require("cowsay");

console.log(auto);
console.log(
    cowsay.say({
        text : "I'm a moooodule",
        e : "oO",
        T : "U "
    }),
    cowsay.think({
        text : "I'm a moooodule",
        e : "oO",
        T : "U "
    })
);