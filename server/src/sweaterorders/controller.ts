import { JsonController, Post, Param, Get, Body, Put, NotFoundError, HttpCode, Delete, Authorized} from 'routing-controllers'
import {Order, Size}  from './entities';

@JsonController()
export default class OrderController {

  @Post('/orders')
  @HttpCode(201)
  async createOrder(
    @Body() order: Partial<Order>,
  ) {
        const newOrder = await Order.create(order)
        return newOrder.save()
  }

  @Put('/orders/:id([0-9]+)')
  async updateOrder(
     @Body() update: Partial<Order>,
     @Param('id') id: number 
  ) {
      console.log(update)
      const order = await Order.findOne(id)
      if (!order) throw new NotFoundError ('Order not found') 
      return Order.merge(order, update).save()
  }

  @Put('/sizes/:id([0-9]+)')
  async updateSize(
     @Body() update: Partial<Size>,
     @Param('id') id: number 
  ) {
      const size = await Size.findOne(id)
      if (!size) throw new NotFoundError ('Size not found') 
      return Size.merge(size, update).save()
  }

  @Authorized()
  @Get('/orders/:id([0-9]+)')
  getOrder(
    @Param('id') id: number
  ) {
    return Order.findOne(id)
  }

  @Get('/orders')
  allOrders = async() => {
    const orders = await Order.find()
    return orders
  }

  @Delete('/orders/:id')
   async deleteOrder(
        @Param('id') id: number,
   ) {
        const orderToDelete = await Order.findOne(id)
        if (!orderToDelete) throw new NotFoundError ('Cannot find order')
        return Order.delete(orderToDelete)
      
   }

}
