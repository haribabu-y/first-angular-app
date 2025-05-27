import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

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
  
  //Optional 2nd argument of @ViewChild()
  //1. read: Use it to read the different token from the quired element
  //2. Determines when the query is resolved.
    // True is when the view is initialized (before the first change detection) for the first time.
    // False if you want it to be resolved after every change detection
  @ViewChild('searchElement') searchInputEl: ElementRef

  // Raising thr event
  // onSearchTextChanged() {
  //   this.searchtextChanged.emit(this.searchText);
  // }

  // onsearchTextChange(event: any) {
  //   this.searchText = event.target.value;
  // }

  onsearchTextChange() {
    // this.searchText = event.target.value;
    // console.log(inputElement.value);
    this.searchText = this.searchInputEl.nativeElement.value;
    this.searchtextChanged.emit(this.searchText);
    
  }
}
