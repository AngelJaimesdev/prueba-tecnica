
import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { TableService } from './table.service';
import { TableEntity } from './table.entity';

@Controller('table')
export class TableController {
  constructor(private readonly tableService: TableService) {}

  @Get()
  async getAll(): Promise<TableEntity[]> {
    return await this.tableService.getAllProducts();
  }

  // @Get('search')
  // async searchProducts(@Query('search') searchTerm: string): Promise<TableEntity[]> {
  //   return await this.tableService.searchProducts(searchTerm);
  // }
}
