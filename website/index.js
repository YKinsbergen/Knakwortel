const Koa = require('koa')
const serve = require('koa-static');
const setupViews = require('./middleware/views')

const PORT = process.env.PORT || 5000

const app = new Koa()
setupViews(app)

const home = require('./routes/home')

app.use(serve('./public'))
app.use(home.routes())
app.use(home.allowedMethods())

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))