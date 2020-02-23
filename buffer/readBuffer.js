const fs = require('fs')
const path = require('path')

fs.readFile(path.join(__dirname, 'test.txt'), (err, result) => {
    console.log(result)  //返回十六进制数据 <Buffer e8 84 9a e8 b8 8f e7 a5 a5 e4 ba 91>
    debugger
    const buffer =  Buffer.from(result)
    console.log(buffer)
    console.log(buffer.toString('utf-8'))
})