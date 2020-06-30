var resolve = require('resolve');

resolve('yargs', { basedir: __dirname }, function (err, res) {
    if (err) console.error(err);
    else console.log(res);
});