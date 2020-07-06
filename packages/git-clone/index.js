const gitClone = require('git-clone');
const path = require('path');
const ora = require('ora')

const spinner = ora();

const repo = 'https://github.com/song111/easy-template.git';
const projectPath = '/Users/songjun/学习/github/node_api_test/packages/git-clone/test';
const cloneOpts = {
  checkout: 'base',   // 模版分支
};

spinner.start('开始克隆.....'); // 需要使用相对路径

gitClone(repo, projectPath, cloneOpts, (err) => {
  spinner.succeed('克隆结束......');
  if (err) return console.log('模版克隆失败！');
  console.log('模版克隆成功！');
});
