import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @Input()
  all: number = 0;
  @Input()
  inStock: number = 0;
  @Input()
  outOfstock: number = 0;

  @Output()
  selectedRadiobuttonChanged: EventEmitter<string> = new EventEmitter<string>();

  selectedRadiobutton: string = 'all';

  onSelectedRadioButton() {
    console.log('onselectedRadioButton aised');    
    console.log(this.selectedRadiobutton);    
    this.selectedRadiobuttonChanged.emit(this.selectedRadiobutton);
  }
}
