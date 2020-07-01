const del = require('del')
const ora = require('ora')
const path = require('path')
const chalk = require('chalk');

const spinner = ora()

spinner.start('删除文件.....')   // 需要使用相对路径

let num = 1000000000
while(num>0){
    num--
}
console.log(chalk.yellowBright('开始删除')) 
const deletedPaths = del.sync([path.resolve(__dirname, './testcopy/*.js')]);

spinner.succeed('✅删除完成')
console.log('Deleted files and directories:\n', deletedPaths.join('\n'));
