// src/index.ts
import 'reflect-metadata'
import {createKoaServer} from "routing-controllers"
import setupDb from './db'
import AdminController from './admins/controller';
import { RecipeController } from './recipes/controller';
import LoginController from './logins/controller';
import {PagesController} from './pages/controller'
import { ImageController } from './images/controller';
// import { Page } from './pages/entities';


const port = process.env.PORT || 4000

const app = createKoaServer({
  cors: true,
  controllers: [
    AdminController,
    RecipeController,
    LoginController,
    PagesController,
    ImageController
    ]
})

setupDb()
  .then(_ =>
    app.listen(port, () => console.log(`Listening on port ${port}`))
  )
  .catch(err => console.error(err))