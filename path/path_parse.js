const path = require("path");

const testDirPath = "D:\\学习\\github\\node_api_test";

const testFilePath = "D:\\学习\\github\\node_api_test\\index.html";

const testFileNoExtPath = "D:\\学习\\github\\node_api_test\\path\\index";

console.log(
  "path.basename",
  path.basename(testDirPath),
  path.basename(testFilePath),
  path.basename(testFileNoExtPath)
);

console.log(
  "path.parse",
  path.parse(testDirPath),
  path.parse(testFilePath),
  path.parse(testFileNoExtPath)
);

console.log(
  "path.extname",
  path.extname(testDirPath),
  path.extname(testFilePath),
  path.extname(testFileNoExtPath)
);
