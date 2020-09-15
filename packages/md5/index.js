const fs = require("fs");
const md5 = require("md5");
const path = require("path");

fs.readFile(path.resolve(__dirname, "text.js"), (err, data) => {
  console.log(err);
  console.log(md5(data));
});

fs.readFile(path.resolve(__dirname, "source/text.js"), (err, buf) => {
  console.log(err);
  console.log(md5(buf));
});

// fs.readFile("./target/text.js", (err, buf) => {
//   console.log(md5(buf));
// });


