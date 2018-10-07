// src/index.ts
import 'reflect-metadata'
import {Action, createKoaServer, BadRequestError} from "routing-controllers"
import setupDb from './db'
import { verify } from './jwt'
import AdminController from './admins/controller';
import { RecipeController } from './recipes/controller';
import LoginController from './logins/controller';
import {PagesController} from './pages/controller'
import { ImageController } from './images/controller';
// import { Page } from './pages/entities';
import { ShopsController } from './shops/controller';
import Admin from './admins/entity'


const port = process.env.PORT || 4000

const app = createKoaServer({
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
    app.listen(port, () => console.log(`Listening on port ${port}`))
  )
  .catch(err => console.error(err))