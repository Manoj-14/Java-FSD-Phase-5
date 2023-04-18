import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  products = [];

  onAddProduct(productData: {
    productName: string;
    productDesc: string;
    productQuantity: number;
    productCost: number;
  }) {
    this.products.push(productData);
  }
}
