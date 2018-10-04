const router = require('koa-router')()
const parseBody = require('koa-body')
const axios = require('axios')
const constants = require('../constants')
const apiUrl = constants.apiUrl

router.get('/', async (ctx, next) => {
  const pageId = 1
  const pageRequest = await axios(`${apiUrl}/pages/${pageId}`)
  const page = pageRequest.data
  ctx.render('index', 
    { 
      title: page.pageTitle.content,
      page: page
    })
  await next()
})

module.exports = router
