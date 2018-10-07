import { JsonController, Get, BadRequestError, Body, Post} from "routing-controllers";
import {Shop} from './entity'

@JsonController()
export class ShopsController {

  @Post('/shops')
  async newShop(
    @Body() shops: any,//object[]
  ) {
    if (shops.length === 0) {
      throw new BadRequestError('Shops is not an array')
    }
    const savedShops: any = []
    shops.forEach(async (shop) => {
      if (shop.name) {
        const newShop = await Shop.create(shop)
        newShop.save()
        savedShops.push(newShop)
      }
    })
    return {newShops: savedShops}
  }

  @Get('/shops')
  async allShops() {
    const shops = await Shop.find()
    if (!shops) throw new BadRequestError(`Can't find any shops`)
    return {shops}
  }



}