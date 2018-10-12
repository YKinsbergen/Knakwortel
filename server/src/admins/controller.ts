import { JsonController, Post, BodyParam, Param, Get, NotFoundError, BadRequestError, Authorized, Delete } from 'routing-controllers'
import Admin from './entity';

@JsonController()
export default class AdminController {

  @Authorized()
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
  @Delete('/admins/:id')
  async deleteAdmin(
     @Param('id') id: number
  ) {
      const admin = await Admin.findOne(id)
      if (!admin) throw new NotFoundError ('Admin does not exist') 
      admin.remove()
      return admin
  }

  @Authorized()
  @Get('/admins/:id([0-9]+)')
  getAdmin(
    @Param('id') id: number
  ) {
    return Admin.findOne(id)
  }

  @Authorized()
  @Get('/admins')
  allAdmins() {
    return Admin.find()
  }
}