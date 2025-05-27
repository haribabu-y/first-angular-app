import { Component, ViewChild } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  // name: string = "iphone 16 pro";
  // price: number = 1999;
  // color: string = 'red';
  // name = "Hari"

  // addToCart: number = 0;
  // product = {
  //   name: "iphone 16",
  //   price: 1599,
  //   color: 'red',
  //   discount: 8.5,
  //   inStock: 5,
  //   pImage: '/assets/iphone16.jpg',
  // }

  // getDiscountedPrice() {
  //   return this.product.price - (this.product.price * this.product.discount / 100);
  // }

  // onNameChange(event: any) {
  //   // this.name = "Eran";
  //   // console.log(event.target.value);
  //   // this.name = event.targe.value;
    
  // }

  // decrementCartValue() {
  //   this.addToCart--;
    
  // }

  // incrementCartvalue() {
  //   if(this.addToCart < this.product.inStock) {
  //     this.addToCart++;
  //   }
  // }

  // userList: string[] = ['John', 'Jane', 'Doe', 'Smith'];

  searchText: string = '';

  setSearchText(value: string) {
    this.searchText = value;
    // console.log(this.searchText);
    
  }

  @ViewChild(ProductListComponent) productListComponent: ProductListComponent;
}
