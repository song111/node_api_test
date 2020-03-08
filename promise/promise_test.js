// 原生promise
const promise1  =new Promise((resolve, reject) => {
    debugger
    setTimeout(() => {
      debugger
      resolve(1)
    }, 1000)
  })
    .then(res => {
      debugger
      return res // 需要返回结果才能把结果传给洗面一个then
    })
    .then(res => {
      debugger
      console.log(res)
    })
  

  const promise2=  new Promise((resolve, reject) => {
        debugger
        setTimeout(() => {
          debugger
          resolve(1)
        }, 1000)
      })
        .then(res => {
          debugger
          return promise2 // 需要返回结果才能把结果传给洗面一个then
        })
        .then(res => {
          debugger
          console.log(res)
        })

