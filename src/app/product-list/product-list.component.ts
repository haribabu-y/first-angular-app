import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  // name: string = "iphone 16 pro";
  // price: number = 1999;
  // color: string = 'red';

  product = {
    name: "iphone 16",
    price: 1599,
    color: 'red',
    discount: 8.5,
    inStock: 5
  }

  getDiscountedPrice() {
    return this.product.price - (this.product.price * this.product.discount / 100);
  }
}
