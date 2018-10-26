#!/usr/bin/env node

// node modules
const program = require('commander');
const { prompt } = require('inquirer');
const env = require('dotenv').config();

// custom class helper
const NodeCli = require('./node_cli');

// connect to mongodb
require('./models').connect(process.env.DB_PATH);

// prompt questions
const questions = [
  {
    type : 'input',
    name : 'firstname',
    message : 'Enter firstname ..'
  },
  {
    type : 'input',
    name : 'lastname',
    message : 'Enter lastname ..'
  },
  {
    type : 'input',
    name : 'phone',
    message : 'Enter phone number ..'
  },
  {
    type : 'input',
    name : 'email',
    message : 'Enter email address ..'
  }
];

// cli data
program
  .version('0.0.1')
  .description('node contact cli')
// add contact method
program
  .command('addContact')
  .alias('a')
  .description('Add a contact')
  .action(() => {
    prompt(questions).then((answers) =>
      NodeCli.addContact(answers));
  });
// get contact method
program
  .command('getContact <name>')
  .alias('g')
  .description('Get contact')
  .action(name => NodeCli.getContact(name));
// update contact method
program
  .command('updateContact <_id>')
  .alias('u')
  .description('Update contact')
  .action(_id => {
    prompt(questions).then((answers) =>
      NodeCli.updateContact(_id, answers));
  });
// delete contact method
program
  .command('deleteContact <_id>')
  .alias('d')
  .description('Delete contact')
  .action(_id => NodeCli.deleteContact(_id));
// get all contacts method
program
  .command('getContactList')
  .alias('l')
  .description('List contacts')
  .action(() => NodeCli.getContactList());

// Assert that a VALID command is provided
if (!process.argv.slice(2).length || !/[arudl]/.test(process.argv.slice(2))) {
  program.outputHelp();
  process.exit();
}
program.parse(process.argv)
