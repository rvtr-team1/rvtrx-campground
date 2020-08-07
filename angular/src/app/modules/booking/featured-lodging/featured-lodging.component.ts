import { Component, OnInit, Input } from '@angular/core';
import { Lodging } from 'src/app/data/lodging.model';

@Component({
  selector: 'uic-featured-lodging',
  templateUrl: './featured-lodging.component.html',
  styleUrls: ['./featured-lodging.component.scss'],
})
export class FeaturedLodgingComponent implements OnInit {
  @Input() featuredLodgings: Lodging[] | null;

  constructor() {}

  ngOnInit(): void {}

  setFeaturedLodgings(): void {
    let lodgings: Lodging[] = new Array(6);

    if (this.featuredLodgings){
      for (let index = 0; index < lodgings.length; index++) {
        if (this.featuredLodgings[index].reviews) {
          lodgings.push(this.featuredLodgings[index]);
        }
      }
    }

    this.featuredLodgings = lodgings;
  }
}
