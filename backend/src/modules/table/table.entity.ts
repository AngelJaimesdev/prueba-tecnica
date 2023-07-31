// table.entity.ts

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('table') // Especifica el nombre de la tabla en la base de datos
export class TableEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'PRODUCT_NAME' })
  productName: string;

  @Column({ name: 'CATEGORY' })
  category: string;

  @Column({ name: 'BRAND' })
  brand: string;

  @Column({ name: 'DESCRIPTION', length: 120 })
  description: string;

  @Column({ name: 'PRICE' })
  price: string;
}
