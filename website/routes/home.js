const router = require('koa-router')()
const parseBody = require('koa-body')
const axios = require('axios')



router.get('/', async (ctx, next) => {
  const starwarsPeople = await axios(`https://swapi.co/api/people/`)
  ctx.render('index', 
    { 
      title: page.pageTitle.content,
      people: starwarsPeople.data,
      page: page
    })
  await next()
})

module.exports = router

const page = {
  id: 1,
  published_at: '2018-09-01',
  pageTitle: {
    id: 1,
    locale: 'NL',
    pageId: 1,
    content: 'Home',
  },
  pageContent: [
    {
      id: 1,
      headline: 'Of je wortel lust',
      body: 'De plantaardige variant op de klassieker uit New York. Nu verkrijgbaar bij Albert Heijn en Hanos.',
      btnText: null,
      btnAction: null,
      locale: 'NL',
      order: 1,
      image: 'https://knakwortel.nl/images/Knakwortel-vegan-plantaardige-hotdog-S.jpg',
      iframeUrl: null,
    },
    {
      id: 2,
      headline: 'NU VERKRIJGBAAR BIJ ALBERT HEIJN',
      body: 'Wil je weten waar Knakwortel bij jou in de buurt verkrijgbaar is? Check de lijst met verkooplocaties.',
      btnText: 'Ik wil knakwortel!',
      btnAction: '/kopen',
      locale: 'NL',
      order: 2,
      image: 'https://knakwortel.nl/images/Knakwortel_AH.jpg',
      iframeUrl: null,
    }
  ]
}