const  chalk =require( 'chalk' );
const os = require('os')


const log = console.log

log(chalk.blueBright('hello chalk'))
log(chalk.bgCyan('hello chalk'))

// Combine styled and normal strings
log(chalk.blue('Hello') + ' World' + chalk.red('!'));

// Compose multiple styles using the chainable API
log(chalk.blue.bgRed.bold('Hello world!'));

// Pass in multiple arguments
log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));

// Nest styles
log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));

// Nest styles of the same type even (color, underline, background)
log(chalk.green(
	'I am a green line ' +
	chalk.blue.underline.bold('with a blue substring') +
	' that becomes green again!'
));

// ES2015 template literal
log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);



// ES2015 tagged template literal
// log(chalk`
// CPU: {red ${cpu.totalPercent}%}
// RAM: {green ${ram.used / ram.total * 100}%}
// DISK: {rgb(255,131,0) ${disk.used / disk.total * 100}%}
// `);

// Use RGB colors in terminal emulators that support it.
log(chalk.keyword('orange')('Yay for orange colored text!'));
log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
log(chalk.hex('#DEADED').bold('Bold gray!'));


const cpus = os.cpus();
console.log('*****cpu信息*******');
cpus.forEach((cpu,idx,arr)=>{
    var times = cpu.times;
    console.log(`cpu${idx}：`);
    console.log(`型号：${cpu.model}`);
    console.log(`频率：${cpu.speed}MHz`);
    console.log(`使用率：${((1-times.idle/(times.idle+times.user+times.nice+times.sys+times.irq))*100).toFixed(2)}%`);
});