const Pug = require('koa-pug')

module.exports = (app) => {
  const pug = new Pug({
    viewPath: __dirname + '/../views/',
    pretty: true
  })
  pug.use(app)
}