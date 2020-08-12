import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Lodging } from 'src/app/data/lodging.model';

@Component({
  selector: 'uic-featured-lodging',
  templateUrl: './featured-lodging.component.html',
  styleUrls: ['./featured-lodging.component.scss'],
})
export class FeaturedLodgingComponent implements OnInit, OnChanges {
  @Input() featuredLodgings: Lodging[] | null;
  displayLodgings: Lodging[] = [];

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges() {
    if (this.featuredLodgings) {
      this.displayLodgings = this.featuredLodgings.slice(0, 6);
    }
  }
}
