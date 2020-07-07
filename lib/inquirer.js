const inquirer = require('inquirer');

const default_command = `goviquery 'invoices' -s "paidDate" -d "ASC"`;
const second_command = `goviquery 'invoices' -s "paidDate" -d "DESC"`;
const third_command = `goviquery 'invoices' -s "amount' -d "ASC"`;
const fourth_command = `goviquery 'invoices' -s "amount" -d "DESC"`;

module.exports = {
  askForCommand: () => {
    const questions = [
      {
        name: 'command',
        type: 'input',
        message: `4 possible commands\n${default_command}\n${second_command}\n${third_command}\n${fourth_command}
        \nEnter a command (i.e. ${default_command} is the default command), or "exit" to exit:`,
        //choices: [default_command, second_command, third_command, fourth_command],
        validate: function( value ) {
          if (value.length) {
            let commandTokens = value.split(' ');
            if (value != default_command && value != second_command && value != third_command && value != fourth_command && value != 'exit') {
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
    return inquirer.prompt(questions);/*.then(answers => {
      if (answers.command == "exit") {
        console.log("entered exit");
        process.exit();
      } else {

        let commandTokens = answers.command.split(' ');
        if (commandTokens.length > 5) {

        } else {
          console.log(`please enter a valid command, here are the four possible commands: ${default_command}\n${second_command}\n${third_command}\n${fourth_command}`)
        }
        //answers.command = "entered a command: " + answers.command;
      }
    });*/
  },
  default_command: default_command,
  second_command: second_command,
  third_command: third_command,
  fourth_command: fourth_command
};
