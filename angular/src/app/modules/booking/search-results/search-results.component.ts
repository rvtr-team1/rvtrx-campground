import { Component, Input, OnInit } from '@angular/core';
import { Lodging } from 'src/app/data/lodging.model';

@Component({
  selector: 'uic-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
  @Input() lodgings: Lodging[] | null;

  query: string = 'test query';
  constructor() {}

  ngOnInit(): void {
    console.log(this.lodgings);
  }
}
