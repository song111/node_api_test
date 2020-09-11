const fs = require("fs");
const path = require("path");

const folderName = path.resolve(__dirname, "../", "/test");

// 创建目录
// try {
//   if (!fs.existsSync(folderName)) {
//     fs.mkdirSync(folderName);
//   }
// } catch (err) {
//   console.error(err);
// }

// 文件描述符
// fs.open(path.resolve(__dirname, "./test/index.txt"), "r", (err, fd) => {
//   console.log(err, fd);
// });

// 使用 fs.watch（）监听器的示例。
fs.watch(
  path.join(__dirname, "./test/index.txt"),
  { encoding: "utf-8" },
  (eventType, filename) => {
    console.log(eventType, filename);
    if (filename) {
      console.log(filename);
      // 打印: <Buffer ...>
    }
  }
);

// 文件流
function readToWritr(readPath, writePath) {
  const readStream = fs.createReadStream(readPath);
  const writeStream = fs.createWriteStream(writePath);
  readStream.pipe(writeStream);
}
