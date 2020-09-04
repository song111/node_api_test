const updateNotifier = require("update-notifier");
const path = require("path");
const pkg = require("/Users/songjun/workspace/learn/github/project/node_api_test/package.json");

// Checks for available update and returns an instance
const notifier = updateNotifier({ pkg });

if (notifier.update) {
  console.log(`Update available: ${notifier.update.latest}`);
}
