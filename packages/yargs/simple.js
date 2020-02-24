#!/usr/bin/env node
const argv = require('yargs').argv
debugger
if (argv.ships > 3 && argv.distance < 53.5) {

  console.log('Plunder more riffiwobbles!')
} else {
  console.log('Retreat from the xupptumblers!')
}

// node simple.js  --ships=4 --distance=22  //  Plunder more riffiwobbles!
