const Rx = require('rxjs');
const readline = require('readline');
const fs = require('fs');

const imgStream = readline.createInterface({  // 创建行读取流
    input: fs.createReadStream('input.txt')
});

const writeStream = fs.createWriteStream('output.txt');  // 创建写入流


