#!/usr/bin/env node
var argv = require('yargs')
    .usage('Count the lines in a file.\nUsage: $0 -f <file>')
    .demandOption('f')
    .alias('f', 'file')
    .describe('f', 'Load a file')
    .string('f')
    .showHelpOnFail(false, 'Specify --help for available options')
    .help('help')
    .argv;

console.log(argv)
    // run  node showHelpOnFail.js