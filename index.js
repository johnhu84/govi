const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const inquirer  = require('./lib/inquirer');
const needle = require('needle');
const invoice_url = 'https://bcore-mock.herokuapp.com/invoice';
clear();

console.log(
  chalk.yellow(
    figlet.textSync('Ginit', { horizontalLayout: 'full' })
  )
);

if (files.directoryExists('.git')) {
  console.log(chalk.red('Already a Git repository!'));
} else {
  console.log(chalk.red('No git repository, exiting...'));
  process.exit();
}

const run = async () => {
  while (true) {
    const commands = await inquirer.askForCommand();
    console.log(commands);
    switch (commands.command) {
      case 'exit':
        console.log('exiting...');
        process.exit();
        break;
      case inquirer.default_command:
        console.log(`is ${inquirer.default_command}`);
        needle.get(invoice_url, function(error, response) {
          //console.log(error + ", " + response.statusCode);

          if (response.statusCode == 200) {
            console.log(response.body);
            let invoices = response.body;//JSON.parse(response.body);
            console.log(invoices);
            invoices.sort(function(a, b) {
              var ad = new Date(a.paidDate);
              var bd = new Date(b.paidDate);
              return ad.getTime() - bd.getTime();
            })
            console.log(`result for command ${inquirer.default_command}\n`);
            console.log(invoices);
          } else {
            console.log(`error for ${inquirer.default_command}`);
          }
        });
        break;
      case inquirer.second_command:
        needle.get(invoice_url, function(error, response) {
          if (response.statusCode == 200) {
            let invoices = response.body;//JSON.parse(response.body);
            invoices.sort(function(a, b) {
              var ad = new Date(a.paidDate);
              var bd = new Date(b.paidDate);
              return bd.getTime() - ad.getTime();
            })
            console.log(`result for command ${inquirer.second_command}\n`);
            console.log(invoices);
          } else {
            console.log(`error for ${inquirer.second_command}`);
          }
        });
        break;
      case inquirer.third_command:
        needle.get(invoice_url, function(error, response) {
          if (response.statusCode == 200) {
            let invoices = response.body;//JSON.parse(response.body);
            invoices.sort(function(a, b) {
              //var ad = Date.parse(a);
              //var bd = Date.parse(b);
              return a.amount - b.amount;
            })
            console.log(`result for command ${inquirer.third_command}\n`);
            console.log(invoices);
          } else {
            console.log(`error for ${inquirer.third_command}`);
          }
        });
        break;
      case inquirer.fourth_command:
        needle.get(invoice_url, function(error, response) {
          if (response.statusCode == 200) {
            let invoices = response.body;//JSON.parse(response.body);
            invoices.sort(function(a, b) {
              return b.amount - a.amount;
            })
            console.log(`result for command ${inquirer.fourth_command}\n`);
            console.log(invoices);
          } else {
            console.log(`error for ${inquirer.fourth_command}`);
          }
        });
        break;
      default:
        console.log(`please enter a valid command, here are the four possible commands:
        \n${inquirer.default_command}\n${inquirer.second_command}\n${inquirer.third_command}\n${inquirer.fourth_command}\nand "exit" to exit`);
        break;
    }
    //console.log(commands);
  }
};

run();
