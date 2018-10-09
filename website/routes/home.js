const router = require('koa-router')()
const parseBody = require('koa-body')
const axios = require('axios')
const constants = require('../constants')
const apiUrl = constants.apiUrl

router.get('/', async (ctx, next) => {
  const pageId = 1
  const pageRequest = await axios(`${apiUrl}/pages/${pageId}`)
  
  const instaMediaArray = await instagramPhotos()
  const page = pageRequest.data
  ctx.render('index', 
    { 
      title: page.pageTitle.content,
      page: page,
      instaFeed: instaMediaArray
    })
  await next()
})

router.get('/trui', async (ctx, next) => {
  const pageId = 2
  const pageRequest = await axios(`${apiUrl}/pages/${pageId}`)
  
  const page = pageRequest.data
  console.log(page)
  ctx.render('trui', 
    { 
      title: page.pageTitle.content,
      page: page
    })
  await next()
})

router.post('/trui-bestellen', parseBody(), async (ctx, next) => {
  const { company, name, email, street, houseNumber, addition, zipcode, city, size } = ctx.request.body
  console.log(ctx.request.body)
  

    axios.post(`${apiUrl}/orders`, ctx.request.body
    )
    .catch(function (error) {
      console.log("hi");
    });

  ctx.render('trui-order-success', { company, name, email, street, houseNumber, addition, zipcode, city, size })

  await next()
})


async function instagramPhotos() {
  try {
    const userPageSource = await axios.get('https://www.instagram.com/knakwortel/')
    const jsonObject = userPageSource.data.match(/<script type="text\/javascript">window\._sharedData = (.*)<\/script>/)[1].slice(0, -1)

    const userInfo = JSON.parse(jsonObject)
    const mediaArray = userInfo.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges
    return mediaArray
  }
  catch(er) {
    return er
  }
}

module.exports = router
