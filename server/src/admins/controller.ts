import { JsonController, Post, BodyParam, Param, Get, Body, Put, NotFoundError, BadRequestError, Authorized } from 'routing-controllers'
import Admin from './entity';

@JsonController()
export default class AdminController {

  // Wellicht een optie om een nieuw password aan te vragen. 
  //@Authorized()
  @Post('/admins')
  async signup(
    @BodyParam('email') email: string,
    @BodyParam('password') password: string

  ) {

    const emailExistst = await Admin.count({where: {email}})
    if (emailExistst > 0) { throw new BadRequestError('Email already in use') }
    const entity = Admin.create({email})
    await entity.setPassword(password)

    const admin = await entity.save()

    return admin
  }

  @Authorized()
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