const yargs = require('yargs');

//  command(cmd, desc, [builder], [handler])
// cmd:命令
// desc: 描述
//  builder:（可选）您可以提供一个构建器对象，以提示您的命令接受的选项：
//  handler: 您还可以提供处理程序函数，该函数将与解析的argv对象一起执行： parse()

const command = yargs
  .command(
    'get',
    'make a get HTTP request',
    function (yargs) {
      debugger;
      return yargs.option('u', {
        alias: 'url',
        describe: 'the URL to make an HTTP request to',
      });
    },
    function (argv) {
      debugger;
      console.log(argv.url);
    }
  )
  .help();

  // yargs.parse('get', { url: 'www.baidu.com' });

  console.log( command.parse(process.argv.slice(2)))
