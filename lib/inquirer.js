const inquirer = require('inquirer');

const default_command = `goviquery 'invoices' -s "paidDate" -d "ASC"`;
const second_command = `goviquery 'invoices' -s "paidDate" -d "DESC"`;
const third_command = `goviquery 'invoices' -s "amount" -d "ASC"`;
const fourth_command = `goviquery 'invoices' -s "amount" -d "DESC"`;

module.exports = {
  askForCommand: () => {
    const questions = [
      {
        name: 'command',
        type: 'input',
        message: `4 possible commands\n${default_command} (or use 1)\n${second_command} (or use 2)\n
        ${third_command} (or use 3)\n${fourth_command} (or use 4)
        \nEnter a command (i.e. ${default_command} is the default command), or "exit" to exit:`,
        //choices: [default_command, second_command, third_command, fourth_command],
        validate: function( value ) {
          if (value.length) {
            let commandTokens = value.split(' ');
            if (value != default_command && value != second_command && value != third_command && value != fourth_command && value != 'exit'
          && value != "1" && value != "2" && value != "3" && value != "4") {
                return `please enter a valid command, here are the four possible commands:
                \n${default_command}\n${second_command}\n${third_command}\n${fourth_command}\nand "exit" to exit`
            }
            return true;
          } else {
            return 'Please enter a command (i.e. default_command is the default command), or "exit" to exit.';
          }
        }
      }
    ];
    return inquirer.prompt(questions);
  },
  default_command: default_command,
  second_command: second_command,
  third_command: third_command,
  fourth_command: fourth_command
};
