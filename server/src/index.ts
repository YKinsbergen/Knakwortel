// src/index.ts
import 'reflect-metadata'
import {Action, useKoaServer, BadRequestError} from "routing-controllers"
import setupDb from './db'
import { verify } from './jwt'
import * as Koa from 'koa'
import {Server} from 'http'
import AdminController from './admins/controller';
import { RecipeController } from './recipes/controller';
import LoginController from './logins/controller';
import {PagesController} from './pages/controller'
import { ImageController } from './images/controller';
// import { Page } from './pages/entities';
import { ShopsController } from './shops/controller';
import Admin from './admins/entity'


const port = process.env.PORT || 4000

const app = new Koa()
const server = new Server(app.callback())

// function corsWhiteList(action: Action) {
//     const requestOrigin = action.request.headers.origin
//     console.log('******ORIGIN: ', requestOrigin)
//     const whitelist = [
//       // 'http://localhost',
//       'https://knakwortel-website.herokuapp.com/',
//       'https://knakwortel-admin.herokuapp.com/'
//     ]
//     if (whitelist.includes(requestOrigin)) {
//       return false
//     } else {
//       return false
//     }
// }

useKoaServer(app, {
  cors: true,
  controllers: [
    AdminController,
    RecipeController,
    LoginController,
    PagesController,
    ImageController,
    ShopsController
    ],
    authorizationChecker: (action: Action) => {
      const header: string = action.request.headers.authorization
      if (header && header.startsWith('Bearer ')) {
        const [ , token ] = header.split(' ')
  
        try {
          return !!(token && verify(token))
        }
        catch (e) {
          throw new BadRequestError(e)
        }
      }
  
      return false
    },
    currentUserChecker: async (action: Action) => {
      const header: string = action.request.headers.authorization
      if (header && header.startsWith('Bearer ')) {
        const [ , token ] = header.split(' ')
        
        if (token) {
          const {id} = verify(token)
          return Admin.findOne(id)
        }
      }
      return undefined
    }
})

setupDb()
  .then(_ =>
    server.listen(port, () => {
      console.log(`Listening on port ${port}`)})
  )
  .catch(err => console.error(err))