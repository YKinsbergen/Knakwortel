const router = require('koa-router')()
const parseBody = require('koa-body')
const axios = require('axios')

router.get('/', async (ctx, next) => {
  const starwarsPeople = await axios(`https://swapi.co/api/people/`)
  ctx.render('index', 
    { 
      title: 'Home',
      people: starwarsPeople.data
    })
  await next()
})

module.exports = router