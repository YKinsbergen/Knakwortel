import { JsonController, Get, BadRequestError, Body, Post, Authorized, Delete, Param, NotFoundError} from "routing-controllers";
import { Like } from 'typeorm'
import {Shop} from './entity'

@JsonController()
export class ShopsController {

  @Authorized()
  @Post('/shops')
  async newShop(
    @Body() shops: any,//object[]
  ) {
    if (shops.length === 0) {
      throw new BadRequestError('Shops is not an array')
    }
    const savedShops: any = []
    shops.forEach(async (shop) => {
      if (shop.storeName) {
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

  @Get('/shops/:postcode')
  async getShopsByPostcode(
    @Param('postcode') postcode: string
  ) {
    const shops = await Shop.find({
      where: {postcode: Like(postcode.substr(0, 2)+"%")}
  })
    const shops2 = await Shop.find({
      where: {postcode: Like((Number(postcode.substr(0, 2)) + 1)+"%")}
    })
    const shops3 = await Shop.find({
      where: {postcode: Like((Number(postcode.substr(0, 2)) - 1)+"%")}
    })

    if (!shops) throw new BadRequestError(`Can't find any shops`)
    return shops.concat(shops2).concat(shops3)
  }

  @Delete('/shops/:id')
  async deleteShop(
    @Param('id') id: number
  ) {
    const shop = await Shop.findOne(id)
    if (!shop) throw new NotFoundError('Shop doesnt exist')
    return Shop.delete(shop)
  }

}