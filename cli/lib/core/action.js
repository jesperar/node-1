const inquirer = require('inquirer')
const downloadFn = require('./download')
const config = require('../../config')

const myAction = async (project, args) => {
  console.log(project, args);
  /**
   * 人机交互
   * type list 选择列表
   */
  const answer = await inquirer.prompt([
    {
      type: 'list',
      name: 'framework',
      choices: config.framework,
      message: '请选择你使用的框架：'
    }
  ])
  // 下载
  downloadFn(config.frameworkUrl[answer.framework], project)
}

module.exports = {myAction}