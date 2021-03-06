var which = require('which')

// async usage
which('node', function(er, resolvedPath) {
  // er is returned if no "node" is found on the PATH
  // if it is found, then the absolute path to the exec is returned
  console.log(er, resolvedPath)
})

// or promise
which('node')
  .then(resolvedPath => {
    console.log(resolvedPath)
  })
  .catch(er => {
    console.log(er)
  })

// sync usage
// throws if not found
var resolved = which.sync('node')

// if nothrow option is used, returns null if not found
resolved = which.sync('node', { nothrow: true })

// Pass options to override the PATH and PATHEXT environment vars.
which('node', { path: someOtherPath }, function(er, resolved) {
  if (er) throw er
  console.log('found at %j', resolved)
})


// console.log(which.sync('everest'))