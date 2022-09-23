const download = require('download-git-repo')
const ora = require('ora');
const chalk = require('chalk');

const downloadFn = function(url, project) {
  // 加载插件
  const spinner = ora('Loading unicorns').start();
  spinner.text = 'loading......'
  // 下载插件
  download('direct:' + url, project, {clone: true}, function(err) {
    console.log(err)
    if (!err) {
      spinner.succeed('download succeeded')
      console.log(chalk.blue('Done: you can run:'))
      console.log(chalk.bold('cd' + project));
      console.log(chalk.bold('npm install'));
      console.log(chalk.bold('npm run dev'));
    } else {
      spinner.fail(chalk.red('download failed'))
    }
  })
}

module.exports = downloadFn