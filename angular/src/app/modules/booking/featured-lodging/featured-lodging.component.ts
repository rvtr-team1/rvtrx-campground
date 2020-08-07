import { Component, OnInit, Input } from '@angular/core';
import { Lodging } from 'src/app/data/lodging.model';

@Component({
  selector: 'uic-featured-lodging',
  templateUrl: './featured-lodging.component.html',
  styleUrls: ['./featured-lodging.component.scss'],
})
export class FeaturedLodgingComponent implements OnInit {
  @Input() featuredLodgings: Lodging[];

  constructor() {}

  ngOnInit(): void {
    // setTimeout(() => this.setFeaturedLodgings(), 3000);
  }

  setFeaturedLodgings(): void {
    let lodgings: Lodging[] = new Array(6);

    for (let index = 0; index < lodgings.length; index++) {
      if (this.featuredLodgings[index].reviews) {
        lodgings.push(this.featuredLodgings[index]);
      }
    }

    this.featuredLodgings = lodgings;
  }
}
