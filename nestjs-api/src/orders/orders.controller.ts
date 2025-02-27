import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.ordersService.create(createOrderDto);
  }

  @Get()
  findAll(@Query('walletId') walletId: string) {
    // projeto sem autenticacao. num projeto com autenticacao teriamos o user na request e pegariamos seu wallet id
    // por enquanto passamos como query sring
    return this.ordersService.findAll({ walletId });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ordersService.findOne( id);
  }
}


