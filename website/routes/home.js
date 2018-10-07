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

async function instagramPhotos() {
  const userPageSource = await axios.get('https://www.instagram.com/knakwortel/')
  const jsonObject = userPageSource.data.match(/<script type="text\/javascript">window\._sharedData = (.*)<\/script>/)[1].slice(0, -1)

  const userInfo = JSON.parse(jsonObject)
  const mediaArray = userInfo.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges
  return mediaArray
}

module.exports = router
