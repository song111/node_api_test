const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('hello world')
    }, 1000)
  })
  
  promise.then(res => {
    console.log(res)
  })
  