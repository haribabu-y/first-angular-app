import { Component } from '@angular/core';
import { Product } from 'src/app/Models/Product';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  product: Product;

  // onClose(element: MouseEvent) {
  //   const clickedElement = element.target as HTMLElement;
  //   const parentElement = clickedElement.parentElement;
  //   const rootElement = parentElement.parentElement;
  //   rootElement.style.display = 'none';
  // }
}
