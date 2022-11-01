import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';
import { AllRoles } from 'types';

@Entity({ name: 'orders' })
export class Order extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column({
    type: 'varchar',
    nullable: false,
    unique: true,
  })
  amount: string;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  name: string;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  price: string;

  @Column({
    type: 'boolean',
    nullable: false,
    default: true,
  })
  active: boolean;
}

export const OrderResource = {
  resource: Order,
  options: {
    navigation: {
      name: 'Таблицы',
      icon: 'List',
    },
  },
};
