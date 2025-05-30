import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class AppHoverDirective {

  constructor(private element: ElementRef,private renderer: Renderer2) { }

  @HostBinding('style.backgroundColor') backgroundColor: string = 'black';
  @HostBinding('style.border') border: string = 'none';
  @HostBinding('style.color') textColor: string = 'white';

  @HostListener('mouseenter') onMouseEnter() {
    this.backgroundColor = "white";
    this.border = '2px solid black';
    this.textColor = 'black';
  }

  @HostListener('mouseout') onMouseOut() {
    this.backgroundColor = 'black';
    this.border = 'none';
    this.textColor = 'white';
  }
}
