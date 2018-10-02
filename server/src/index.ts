// src/index.ts
import 'reflect-metadata'
import {createKoaServer} from "routing-controllers"
import setupDb from './db'
import { PlaceholderController } from './placeholders/controller';

const port = process.env.PORT || 4000

const app = createKoaServer({
  cors: true,
  controllers: [
    PlaceholderController
    ]
})

setupDb()
  .then(_ =>
    app.listen(port, () => console.log('Listening on port 4000'))
  )
  .catch(err => console.error(err))