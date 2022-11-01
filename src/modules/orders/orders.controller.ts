import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  Param,
  Put,
  UseInterceptors,
} from '@nestjs/common';

import { ErrorOutDto, HttpOut, SuccessOutDto } from 'types';
import { OrdersService } from './orders.service';
import {Order} from "./order.entity";

@UseInterceptors(ClassSerializerInterceptor)
@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Put()
  async update(@Body() body: any): HttpOut {
    try {
      const order = await this.ordersService.updateOrder(body);

      return new SuccessOutDto(order);
    } catch (error) {
      return new ErrorOutDto(error);
    }
  }


  @Delete(':id')
  async delete(@Param('id') id: string): HttpOut {
    try {
      const data = await this.ordersService.delete(id);
      return new SuccessOutDto(data);
    } catch (error) {
      return new ErrorOutDto(error);
    }
  }
}
