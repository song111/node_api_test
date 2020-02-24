var argv = require('yargs')
  .alias('i', 'ingredient')
  .describe('i', 'choose your sandwich ingredients')
  .choices('i', ['peanut-butter', 'jelly', 'banana', 'pickles'])
  .help('help')
  .argv