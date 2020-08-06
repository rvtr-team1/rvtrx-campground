import { Component, Input, OnInit } from '@angular/core';
import { Lodging } from 'src/app/data/lodging.model';

@Component({
  selector: 'uic-search-results',
  templateUrl: './search-results.component.html',
})
export class SearchResultsComponent implements OnInit {
  @Input() lodgings: Lodging[];

  query : string = "test query";
  constructor() { }

  ngOnInit(): void {
    console.log(this.lodgings);
  }

}
