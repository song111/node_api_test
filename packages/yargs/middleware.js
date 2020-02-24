
require('yargs')
  .middleware(function (argv) {
    if (process.env.HOME) argv.home = process.env.HOME
  }, true)
  .command('configure-home', "do something with a user's home directory",
    {
      'home': {
        'demand': true,
        'string': true
      }
    },
    function(argv) {
        debugger
      console.info(`we know the user's home directory is ${argv.home}`)
    }
  )
  .parse('configure-home',{})