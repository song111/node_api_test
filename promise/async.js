const timer = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('hello')
    }, 3000)
  })
}

const asyncFun = async () => {
    const res= await timer()
    return res
}

// async 函数返回一个promise

asyncFun().then(res=>{
    console.log(res)
})