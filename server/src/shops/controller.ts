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
    const shopsByCity = await Shop.find({
      where: {city: postcode.charAt(0).toUpperCase() + postcode.slice(1)}
    })

    const shops = await Shop.find({
      where: {postcode: Like(postcode.substr(0, 2)+"%")}
  })
    const shopsPlusOne = await Shop.find({
      where: {postcode: Like((Number(postcode.substr(0, 2)) + 1)+"%")}
    })
    const shopsPlusTwo = await Shop.find({
      where: {postcode: Like((Number(postcode.substr(0, 2)) + 2)+"%")}
    })
    const shopsPlusThree = await Shop.find({
      where: {postcode: Like((Number(postcode.substr(0, 2)) + 3)+"%")}
    })

    const shopsMinusOne = await Shop.find({
      where: {postcode: Like((Number(postcode.substr(0, 2)) - 1)+"%")}
    })
    const shopsMinusTwo = await Shop.find({
      where: {postcode: Like((Number(postcode.substr(0, 2)) - 2)+"%")}
    })
    const shopsMinusThree = await Shop.find({
      where: {postcode: Like((Number(postcode.substr(0, 2)) - 3)+"%")}
    })

    if (!shops) throw new BadRequestError(`Can't find any shops`)

    // If the search is a city
    let hasNumber = /\d/
    if (hasNumber.test(postcode) === false) {
      return shopsByCity
    }
    // If dutch postal code
    else if (postcode.length > 4) {
      let result: any = []
      result.push(shops.filter(shop => {
        return ((shop.postcode.length > 4) 
        && ( (Number(shop.postcode.substr(0, 4)) - (Number(postcode.substr(0, 4)))) <  1000))
      })
      )
      result.push(shopsPlusOne.filter(shop => {
        return ((shop.postcode.length > 4) 
        && ( (Number(shop.postcode.substr(0, 4)) - (Number(postcode.substr(0, 4)))) <  1000))
      })
      )
      result.push(shopsPlusTwo.filter(shop => {
        return ((shop.postcode.length > 4) 
        && ( (Number(shop.postcode.substr(0, 4)) - (Number(postcode.substr(0, 4)))) <  1000))
      })
      )
      result.push(shopsPlusThree.filter(shop => {
        return ((shop.postcode.length > 4) 
        && ( (Number(shop.postcode.substr(0, 4)) - (Number(postcode.substr(0, 4)))) <  1000))
      })
      )
      result.push(shopsMinusThree.filter(shop => {
        return ((shop.postcode.length > 4) 
        && ( (Number(shop.postcode.substr(0, 4)) - (Number(postcode.substr(0, 4)))) <  1000))
      })
      )
      result.push(shopsMinusTwo.filter(shop => {
        return ((shop.postcode.length > 4) 
        && ( (Number(shop.postcode.substr(0, 4)) - (Number(postcode.substr(0, 4)))) <  1000))
      })
      )
      result.push(shopsMinusOne.filter(shop => {
        return ((shop.postcode.length > 4) 
        && ( (Number(shop.postcode.substr(0, 4)) - (Number(postcode.substr(0, 4)))) <  1000))
      })
      )
      return [].concat.apply([], result);
    }
    // If belgic postal code
    else if (postcode.length < 5) {
      let result: any = []
      result.push(shops.filter(shop => {
        return ((shop.postcode.length < 5) 
        && ( (Number(shop.postcode.substr(0, 4)) - (Number(postcode.substr(0, 4)))) <  1000))
      })
      )
      result.push(shopsPlusOne.filter(shop => {
        return ((shop.postcode.length < 5) 
        && ( (Number(shop.postcode.substr(0, 4)) - (Number(postcode.substr(0, 4)))) <  1000))
      })
      )
      result.push(shopsPlusTwo.filter(shop => {
        return ((shop.postcode.length < 5) 
        && ( (Number(shop.postcode.substr(0, 4)) - (Number(postcode.substr(0, 4)))) <  1000))
      })
      )
      result.push(shopsPlusThree.filter(shop => {
        return ((shop.postcode.length < 5) 
        && ( (Number(shop.postcode.substr(0, 4)) - (Number(postcode.substr(0, 4)))) <  1000))
      })
      )
      result.push(shopsMinusThree.filter(shop => {
        return ((shop.postcode.length < 5) 
        && ( (Number(shop.postcode.substr(0, 4)) - (Number(postcode.substr(0, 4)))) <  1000))
      })
      )
      result.push(shopsMinusTwo.filter(shop => {
        return ((shop.postcode.length < 5) 
        && ( (Number(shop.postcode.substr(0, 4)) - (Number(postcode.substr(0, 4)))) <  1000))
      })
      )
      result.push(shopsMinusOne.filter(shop => {
        return ((shop.postcode.length < 5) 
        && ( (Number(shop.postcode.substr(0, 4)) - (Number(postcode.substr(0, 4)))) <  1000))
      })
      )

      return [].concat.apply([], result);
    }
  }

  @Authorized()
  @Delete('/shops/:id')
  async deleteShop(
    @Param('id') id: number
  ) {
    const shopToDelete = await Shop.findOne(id)
    if (!shopToDelete) throw new NotFoundError('Shop doesnt exist')
    shopToDelete.remove()
    return shopToDelete
  }
}