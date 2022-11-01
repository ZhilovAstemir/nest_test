import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Order } from './order.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
  ) {}

  async createOrder(payload: Order) {
    const salt = await bcrypt.genSalt();}

  async updateOrder(payload: any) {
    if (payload.password) {
      const salt = await bcrypt.genSalt();
      const hash = await bcrypt.hash(payload.password, salt);
      payload.password = hash;
    }

    return this.orderRepository.save(payload);
  }

  getUser(id: string) {
    return this.orderRepository.findOne({ where: { id } });
  }

  getUsers() {
    return this.orderRepository.find();
  }

  delete(id: string) {
    return this.orderRepository.save({
      id,
      active: false,
    });
  }
}
