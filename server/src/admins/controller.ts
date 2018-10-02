import { JsonController, Post, Param, Get, Body, Put, NotFoundError } from 'routing-controllers'
import Admin from './entity';

@JsonController()
export default class AdminController {

  //@Authorized()
  @Post('/admins')
  async signup(
    @Body() data: Admin
  ) {
    const {password, ...rest} = data
    const entity = Admin.create(rest)
    await entity.setPassword(password)

    const admin = await entity.save()

    return admin
  }

  @Put('/admins/:id')
  async updateAdmin(
     @Body() update: Partial<Admin>,
     @Param('id') id: number //?? Hoe voegen we het id toe in het endpoint?
  ) {
      const admin = await Admin.findOne(id)
      if (!admin) throw new NotFoundError ('Admin does not exist') 
      return Admin.merge(admin, update).save()
  }

  //@Authorized()
  @Get('/admins/:id([0-9]+)')
  getAdmin(
    @Param('id') id: number
  ) {
    return Admin.findOne(id)
  }

  //@Authorized()
  @Get('/admins')
  allAdmins() {
    return Admin.find()
  }
}