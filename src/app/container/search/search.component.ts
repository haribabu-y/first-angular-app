import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchText: string = '';

  //Creating the event
  @Output()
  searchtextChanged: EventEmitter<string> = new EventEmitter<string>();

  // Raising thr event
  // onSearchTextChanged() {
  //   this.searchtextChanged.emit(this.searchText);
  // }

  // onsearchTextChange(event: any) {
  //   this.searchText = event.target.value;
  // }

  onsearchTextChange(inputElement: HTMLInputElement) {
    // this.searchText = event.target.value;
    console.log(inputElement.value);
    this.searchText = inputElement.value;
    this.searchtextChanged.emit(this.searchText);
    
  }
}
