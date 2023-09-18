const chalk = require('chalk');

function addNumbers(a, b) {
  const sum = a + b;
  console.log(`Die Summe von ${a} und ${b} ist ${chalk.green(sum)}`);
  console.log(`Mein Name ist ${chalk.blue('Andreas Kort')}`);
}

module.exports = { addNumbers };
