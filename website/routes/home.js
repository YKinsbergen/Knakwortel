const router = require('koa-router')()
const parseBody = require('koa-body')

router.get('/', async (ctx, next) => {
  ctx.render('index', { title: 'Home' })
  await next()
})

module.exports = router