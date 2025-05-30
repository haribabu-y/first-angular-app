import { Directive, ElementRef, Input, Renderer2, OnChanges, OnInit, DoCheck } from '@angular/core';

@Directive({
  selector: '[disableProduct]'
})
export class DisableProductDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  // @Input() disableProduct: boolean;

  // // @Input() isDisabled: boolean;

  // ngOnChanges() {

  //   if(this.disableProduct) {
  //     this.renderer.addClass(this.element.nativeElement, 'disable-out-of-stock-product');
  //   }
  //   console.log('disable product', this.disableProduct);
  // }

  // ngOnInit() {

  //   if(this.disableProduct) {
  //     this.renderer.addClass(this.element.nativeElement, 'disable-out-of-stock-product');
  //   }
  //   console.log('disable product', this.isDisabled);
  // }

  // ngDoCheck() {
  //   if(this.disableProduct) {
  //     this.renderer.addClass(this.element.nativeElement, 'disable-out-of-stock-product');
  //   }
  //   console.log('disable product', this.isDisabled);
  // }
  
  @Input() set disableProduct(disable: boolean) {
    if(disable) {
      // this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', '#28282b')
      // this.renderer.setStyle(this.element.nativeElement, 'opacity', '0.5');
      this.renderer.addClass(this.element.nativeElement, 'disable-out-of-stock-product');
    } 
    // console.log('disable product', disable);
    
  };
}
