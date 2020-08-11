import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { Lodging } from 'src/app/data/lodging.model';

@Component({
  selector: 'uic-featured-lodging',
  templateUrl: './featured-lodging.component.html',
  styleUrls: ['./featured-lodging.component.scss'],
})
export class FeaturedLodgingComponent implements OnInit, OnChanges {
  @Input() featuredLodgings: Lodging[] | null;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges() {
    if (this.featuredLodgings) {
      this.featuredLodgings = this.featuredLodgings.slice(0, 6);
    }
  }
}
