const Generator = require('yeoman-generator')

module.exports = class extends Generator{
  // 问题交互
  prompting () {
    return this.prompt([
      {
        type: 'input',
        name: 'projName',
        message: 'Your project name',
        default: this.appname
      }
    ]).then(answers => {
      this.answers = answers
    })
  }
  // 根据模板写入数据
  writing () {
    const templates = [
      '.browserslistrc',
      '.editorconfig',
      '.env.development',
      '.env.production',
      '.eslintrc.js',
      '.gitignore',
      'babel.config.js',
      'package.json',
      'postcss.config.js',
      'README.md',
      'public/favicon.ico',
      'public/index.html',
      'src/App.vue',
      'src/main.js',
      'src/router.js',
      'src/assets/logo.png',
      'src/components/HelloWorld.vue',
      'src/store/actions.js',
      'src/store/getters.js',
      'src/store/index.js',
      'src/store/mutations.js',
      'src/store/state.js',
      'src/utils/request.js',
      'src/views/About.vue',
      'src/views/Home.vue'
    ]
    // 遍历 templates 写入文件
    templates.forEach(item => {
      this.fs.copyTpl(
        this.templatePath(item),
        this.destinationPath(item),
        this.answers
      )
    })
  }
}