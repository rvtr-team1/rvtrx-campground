import { Component, Input, OnInit } from '@angular/core';
import { Booking } from 'src/app/data/booking.model';
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
  }

}
