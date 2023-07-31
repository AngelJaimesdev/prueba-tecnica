// table.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Like, Repository, Between, MoreThanOrEqual } from 'typeorm';
import { TableEntity } from './table.entity';


@Injectable()
export class TableService {
  
  constructor(
    @InjectRepository(TableEntity)
    private tableRepository: Repository<TableEntity>,
  ) {}

  async getAllProducts(): Promise<TableEntity[]> {
    return await this.tableRepository.find();
  }
  
  // async searchProducts(searchTerm: string): Promise<TableEntity[]> {
  
  //   return await this.tableRepository.find({
  //     where: [
  //       { productName: Like(`%${searchTerm}%`) },
  //       { category: Like(`%${searchTerm}%`) },
  //       { brand: Like(`%${searchTerm}%`) },
  //       { description: Like(`%${searchTerm}%`) },
  //       { price: Like(`%${searchTerm}%`) },
  //   ],
  //   });
  // } 
  
}