import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  @Input('product')
  product: {
    productName: string;
    productDesc: string;
    productQuantity: number;
    productCost: number;
  };
}
