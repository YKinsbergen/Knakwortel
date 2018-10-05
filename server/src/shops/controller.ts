import { JsonController, Get, BadRequestError} from "routing-controllers";
import {Shop} from './entity'

@JsonController()
export class ShopsController {

  // @Post('/shops')
  // async newShop(
  //   @BodyParam('name') name: string,
  //   @BodyParam('address') address: string,
  //   @BodyParam('zipcode') zipcode: string,
  //   @BodyParam('latitute') latitute: number,
  //   @BodyParam('longitude') longitude: number
  // ) {

  // }

  @Get('/shops')
  async allShops() {
    const shops = await Shop.find()
    if (!shops) throw new BadRequestError(`Can't find any shops`)
    return {shops}
  }



}