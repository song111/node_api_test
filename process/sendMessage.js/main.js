const cp = require('child_process')
const n = cp.fork(`${__dirname}/sub.js`, {
  execArgv: ['--inspect=' + (process.debugPort + 1)] // 在开发模式使用
})

n.on('message', m => {
  debugger
  console.log('父进程收到消息', m)
})

// 使子进程打印: 子进程收到消息 { hello: 'world' }
n.send({ hello: 'world' })
