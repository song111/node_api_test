const parser = require('yargs') 
  .command(
    'lunch-train <restaurant>',
    'start lunch train',
    function() {},
    function(argv) {
      debugger
      console.log(argv.restaurant, argv.time)
    }
  )
  .parse("lunch-train rudy's", { time: '12:15' })   // parse 触发注册的命令
