import { JsonController, Post, Param, Get, Body, Put, NotFoundError, HttpCode, Delete, Authorized} from 'routing-controllers'
import Order from './entity';

@JsonController()
export default class OrderController {

  @Post('/orders')
  @HttpCode(201)
  async createOrder(
    @Body() order: Partial<Order>,
  ) {
        await Order.create(order).save()
        return order
  }

  @Put('/orders/:id([0-9]+)')
  async updateOrder(
     @Body() update: Partial<Order>,
     @Param('id') id: number 
  ) {
      const order = await Order.findOne(id)
      if (!order) throw new NotFoundError ('Order not found') 
      return Order.merge(order, update).save()
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
