import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent {
  newProductName: string;
  newProductDesc: string;
  newProductQuantity: number;
  newProductCost: number;

  @Output()
  productAdded = new EventEmitter<{
    productName: string;
    productDesc: string;
    productQuantity: number;
    productCost: number;
  }>();

  onAddProduct() {
    this.productAdded.emit({
      productName: this.newProductName,
      productDesc: this.newProductDesc,
      productQuantity: this.newProductQuantity,
      productCost: this.newProductCost,
    });
    this.resetFields();
  }
  resetFields() {
    this.newProductName = '';
    this.newProductDesc = '';
    this.newProductQuantity = null;
    this.newProductCost = null;
  }
}
