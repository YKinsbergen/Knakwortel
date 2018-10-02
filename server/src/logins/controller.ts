// src/logins/controller.ts
import { IsString } from 'class-validator'
import { JsonController, Post, Body, BadRequestError } from 'routing-controllers'
import { sign } from '../jwt'
import Admin from '../admins/entity'

class AuthenticatePayload {
  @IsString()
  email: string

  @IsString()
  password: string
}

@JsonController()
export default class LoginController {

  @Post('/logins')
  async authenticate(
    @Body() { email, password }: AuthenticatePayload
  ) {
    const admin = await Admin.findOne({ where: { email } })
    if (!admin || !admin.id) throw new BadRequestError('A admin with this email does not exist')

    if (!await admin.checkPassword(password)) throw new BadRequestError('The password is not correct')

    const jwt = sign({ id: admin.id })
    return { jwt, id: admin.id }
  }
}



