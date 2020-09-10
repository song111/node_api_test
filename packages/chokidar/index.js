const path = require("path");
const chokidar = require("chokidar");

const tetsPath = path.resolve(__dirname, "./test");

const watcher = chokidar.watch(tetsPath, {
  ignored: /(^|[\/\\])\../, // ignore dotfiles
  persistent: true,
  cwd: path.parse(this.source).dir, // 需要找到source 的目录当作相对路径的根路径
  ignoreInitial: true, // 初始化的时候不监听;
});

// Something to use when events are received.
const log = console.log.bind(console);
// Add event listeners.
watcher
  .on("add", (path) => {
    // 增加文件
    log(`File ${path} has been added`);
  })
  .on("change", (path, stats) => {
    // 修改文件
    log(`File ${path} has been changed`);
    log(path, stats);
  })
  .on("unlink", (path) => {
    // 删除文件
    log(`File ${path} has been removed`);
  })
  .on("addDir", (path) => {
    log(`Directory ${path} has been added`);
  })
  .on("unlinkDir", (path) => {
    // 删除文件夹
    log(`Directory ${path} has been removed`);
  })
  .on("error", (error) => {
    // 报错
    log(`Watcher error: ${error}`);
    process.exit(1);
  });
