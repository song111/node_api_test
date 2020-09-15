const AsyncFiles = require("@chrissong/asyncfiles").default;

const path = require("path");

const asyncFiles = new AsyncFiles({
  source: path.resolve(__dirname, "test/source"),
  target: path.resolve(__dirname, "test/target"),
  watch: true,
});

setTimeout(() => {
  asyncFiles.close();
}, 10 * 1000);
