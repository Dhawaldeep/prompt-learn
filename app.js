// const prompt = require('prompt');

// prompt.start();
// console.log('Program to add 2 numbers');
// prompt.get(['Number 1', 'Number 2'], function (err, result) {
//     if (err) { return onErr(err); }
//     console.log('Command-line input received:');
//     const number1 = +result['Number 1'];
//     const number2 = +result['Number 2'];
//     console.log('  Number 1: ' + number1);
//     console.log('  Number 2: ' + number2);
//     console.log('  Sum: ', number1+number2)
// });
// function onErr(err) {
//     console.log(err);
//     return 1;
// }

// Built In Module
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Program to add 2 numbers');
rl.question("Enter Number 1 ", function(n1) {
    rl.question("Enter Number 2 ", function(n2) {
        console.log('Command-line input received:');
        console.log('  Number 1: ' + n1);
        console.log('  Number 2: ' + n2);
        console.log(`  SUM:  ${+n1 + +n2}`);
        rl.close();
    });
});

rl.on("close", function() {
    console.log("\nBYE BYE !!!");
    process.exit(0);
});
