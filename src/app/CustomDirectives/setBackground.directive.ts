import { Directive, ElementRef, Input, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[setbackground]'
})
export class setBackground implements OnInit {
    // private element: ElementRef;
    private renderer: Renderer2;

    // @Input('setbackground') backColor: string = '#345677';
    // @Input() texColor: string = 'white';

    @Input('setbackground') changeTextAndBackColor: {backColor: string, textColor: string}

    constructor(private element: ElementRef, renderer: Renderer2) {
        // this.element = element;
        this.renderer = renderer;
    }

    ngOnInit() {
        // this.element.nativeElement.style.backgroundColor = '#345677';
        // this.element.nativeElement.style.color = 'white';
        this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', this.changeTextAndBackColor.backColor);
        this.renderer.setStyle(this.element.nativeElement, 'color', this.changeTextAndBackColor.textColor);
        // this.renderer.setAttribute(this.element.nativeElement, 'title', 'This is a custom title');
    }

}