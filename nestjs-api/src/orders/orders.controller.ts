import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrderPresenter } from './orders.presenter';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.ordersService.create(createOrderDto);
  }

  @Get()
  async findAll(@Query('walletId') walletId: string) {
    // projeto sem autenticacao. num projeto com autenticacao teriamos o user na request e pegariamos seu wallet id
    // por enquanto passamos como query sring
    const orders = this.ordersService.findAll({ walletId });
    return (await orders).map((order) => new OrderPresenter(order));
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ordersService.findOne(id);
  }
}
