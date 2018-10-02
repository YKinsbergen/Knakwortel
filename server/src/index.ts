// src/index.ts
import 'reflect-metadata'
import {createKoaServer} from "routing-controllers"
import setupDb from './db'
import AdminController from './admins/controller';

const port = process.env.PORT || 4000

const app = createKoaServer({
  cors: true,
  controllers: [
    AdminController
    ]
})

setupDb()
  .then(_ =>
    app.listen(port, () => console.log('Listening on port 4000'))
  )
  .catch(err => console.error(err))