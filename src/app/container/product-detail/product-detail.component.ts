import { Component, Input } from '@angular/core';
import { Product } from 'src/app/Models/Product';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  // product: Product = this.productListComp.selectedProduct;

  // onClose(element: MouseEvent) {
  //   const clickedElement = element.target as HTMLElement;
  //   const parentElement = clickedElement.parentElement;
  //   const rootElement = parentElement.parentElement;
  //   rootElement.style.display = 'none';
  // }

  @Input() productListComp: ProductListComponent = undefined;
  product: Product;

    ngOnInit() {
      this.product = this.productListComp.selectedProduct;
    }
    // discountedPrice = product.price - (product.price * product.discountPrice / 100);


}
