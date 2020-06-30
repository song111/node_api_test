const ora = require('ora')

const spinner = ora()

spinner.start('开始计数.....')   // 需要使用相对路径

let num = 1000000000
while(num>0){
    num--
}

spinner.succeed('✅完成')