const path = require("path");
const fs = require("fs");

console.log(fs.readdirSync(path.join(__dirname, "dirs")));
