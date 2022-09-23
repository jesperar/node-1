const {myAction} = require('./action')

const myCommand = function (program) {
  /**
   * command 指令 <project> 参数 中括号里是副参数
   * alias 别名
   * description 描述
   * action 动作 执行逻辑代码
   *    参数为command里的属性，project对应project args 对应[other...]
   */
  program
    .command('create <project> [other...]')
    .alias('crt')
    .description('创建项目')
    .action(myAction)
}

module.exports = {myCommand}