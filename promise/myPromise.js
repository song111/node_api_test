function MyPromise(constructor) {
  let self = this
  self.status = 'pending' //定义状态改变前的初始状态
  self.value = undefined //定义状态为resolved的时候的状态
  self.reason = undefined //定义状态为rejected的时候的状态
  self.onFullfilledArray = [] // 保存异步的方法
  self.onRejectedArray = [] //保存异步的方法

  function resolve(value) {
    if (self.status === 'pending') {
      self.value = value
      self.status = 'resolved'
      self.onFullfilledArray.forEach(function(f) {
        f(value)
        //如果状态从pending变为resolved，
        //那么就遍历执行里面的异步方法
      })
    }
  }

  function reject(reason) {
    if (self.status === 'pending') {
      self.reason = reason
      self.status = 'rejected'
      self.onFullfilledArray.forEach(function(f) {
        f(value)
        //如果状态从pending变为rejected，
        //那么就遍历执行里面的异步方法
      })
    }
  }

  try {
    constructor(resolve, reject)
  } catch (err) {
    reject(err)
  }
}

MyPromise.prototype.then = function(onFullfilled, onRejected) {
  let self = this
  let nextPromise
  switch (self.status) {
    case 'pending':
      nextPromise = new MyPromise(function(resolve, reject) {
        self.onFullfilledArray.push(function() {
          setTimeout(function() {
            try {
              let nextValue = onFullfilled(self.value)
              // debugger
              // resolve(nextValue)
              resolvePromise(nextPromise, nextValue, resolve, reject)
            } catch (err) {
              reject(err)
            }
          })
        })
        self.onRejectedArray.push(function() {
          setTimeout(function() {
            try {
              let nextReason = onRejected(self.reason)
              resolvePromise(nextPromise, nextValue, resolve, reject)
            } catch (err) {
              reject(err)
            }
          })
        })
      })

      break
    case 'resolved':
      nextPromise = new MyPromise(function(resolve, reject) {
        setTimeout(function() {
          try {
            let nextValue = onFullfilled(self.value)
            resolvePromise(nextPromise, nextValue, resolve, reject)
          } catch (err) {
            reject(err)
          }
        })
      })
      break
    case 'rejected':
      nextPromise = new MyPromise(function(resolve, reject) {
        setTimeout(function() {
          try {
            let nextReason = onRejected(self.reason)
            resolvePromise(nextPromise, nextReason, resolve, reject)
          } catch (err) {
            reject(err)
          }
        })
      })
      break
    default:
  }
  return nextPromise
}

function resolvePromise(promise, x, resolve, reject) {
  // resolve  返回值的判断{ 普通类型，对象，函数，null，promise}
  // 不可以返回promise
  if (promise === x) {
    debugger
    return reject(new TypeError('cyclic reference'))
  }
  let isUsed
  if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
    try {
      let then = x.then
      if (typeof then === 'function') {
        then.call(
          x,
          function(y) {
            if (isUsed) return
            isUsed = true
            resolvePromise(promise, y, resolve, reject)
          },
          function(err) {
            if (isUsed) return
            isUsed = true
            reject(err)
          }
        )
      } else {
        resolve(x)
      }
    } catch (err) {
      if (isUsed) return
      isUsed = true
      reject(err)
    }
  } else {
    resolve(x)
  }
}

/** promise 的静态方法 resolve
 * resolve 的参数有三种
 * 1.传入了promise 直接返回
 * 2.如果 value 是个 thenable 对象，返回的promise会“跟随”这个thenable的对象，采用它的最终状态
 * 3.其他情况，直接返回以该值为成功状态的promise对象。
 */
MyPromise.resolve = function(param) {
  if (param instanceof Mypromise) {
    return param
  }
  return new MyPromise((resolve, reject) => {
    if (param && param.then && typeof param.then === 'function') {
      setTimeout(() => {
        // thenable  里面then函数的执行要是一个异步执行
        return param.then(resolve, reject)
      })
    } else {
      resolve(param)
    }
  })
}

// thenable 函数的定义
// {
//   then: function(resolve, reject){
//     console.log(2);
//     resolve(3)
//   }
// }

// 作为reject 的参数返回
MyPromise.reject = function(param) {
  return new Promise((resolve, reject) => {
    reject(param)
  })
}

/** 接收一个promise的数组，返回一个promise对象
 *
 */
MyPromise.all = function(promises) {
  return new MyPromise((resolve, reject) => {
    let index = 0
    let result = []
    if (promise.length === 0) {
      resolve(result)
    } else {
      function processValue(i, data) {
        result[i] = data
        if (++index === promises.length) {
          resolve(result)
        }
      }
      for (let i = 0; i < promises; i++) {
        MyPromise.resolve(promises[i]).then(
          data => {
            processValue(i, data)
          },
          err => {
            reject(err)
            return
          }
        )
      }
    }
  })
}

// 测试
var p = new MyPromise(function(resolve, reject) {
  setTimeout(() => {
    resolve(1)
  }, 1000)
})

p.then(function(x) {
  debugger
  console.log('then1', x)
  return p
}).then(function(x) {
  console.log('then2', x)
  return x
})
