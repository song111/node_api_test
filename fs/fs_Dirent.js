const fs = require("fs");
const testFileNoExtPath = "D:\\学习\\github\\node_api_test\\path\\index";

// fs.readdir(testFileNoExtPath);

const readPath = async (path) => {
  const stats = await fs.promises.stat(path);
  console.log(stats.isFile());
};

readPath(testFileNoExtPath);
