const fs = require('fs')
const path = require('path')

// 使用 fs.watch（）监听器的示例。
fs.watch(path.join(__dirname,'test.txt'), { encoding: 'buffer' }, (eventType, filename) => {
    if (filename) {
      console.log(filename);
      // 打印: <Buffer ...>
    }
  });