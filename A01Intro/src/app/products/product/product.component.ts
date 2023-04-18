import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnChanges {
  @Input('product')
  product: {
    productName: string;
    productDesc: string;
    productQuantity: number;
    productCost: number;
  };

  ngOnChanges(changes: SimpleChanges): void {
    console.log('LifeCycle:ngOnChanges');
    console.log(changes);
  }
}
