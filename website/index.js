const Koa = require('koa')
const serve = require('koa-static');
const setupViews = require('./middleware/views')
const constants = require('./constants')
const apiUrl = constants.apiUrl

const PORT = process.env.PORT || 5000

const app = new Koa()
setupViews(app)

const home = require('./routes/home')

app.use(serve('./public'))

app.use(async (ctx, next) => {
  try {
    await next()

    if (ctx.status === 404) ctx.throw(404)
  } catch (err) {
    console.error(err)
    ctx.status = err.status || 500
    ctx.render('not-found',  // Use your render method
      {
        title: ctx.status,
        error: err

      }
    )
  }
})
app.use(home.routes())
app.use(home.allowedMethods())

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
console.log(`Api url: ${apiUrl}`)

