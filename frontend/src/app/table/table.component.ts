import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tableService } from './table.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  
  products: any[] = [];

  constructor(private _tableService: tableService) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(): void {
    this._tableService.getProducts().subscribe((res: any) => {
      this.products = res;
    });
  }

  searchTerm: string = '';
  filteredProducts: any[] = [];

  filterProducts(): void {
    if (!this.searchTerm) {
      this.filteredProducts = this.products;
      return;
    }
    const searchValue = this.searchTerm.toLowerCase();
    this.filteredProducts = this.products.filter((product) => {
      // Buscar en todas las propiedades del producto
      for (const key in product) {
        if (Object.prototype.hasOwnProperty.call(product, key)) {
          const value = product[key].toString().toLowerCase();
          if (value.includes(searchValue)) {
            return true;
          }
        }
      }
      return false;
    });
  }
}
