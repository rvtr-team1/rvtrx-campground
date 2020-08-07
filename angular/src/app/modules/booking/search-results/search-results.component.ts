import { Component, Input, OnInit } from '@angular/core';
import { Lodging } from 'src/app/data/lodging.model';
import { Stay } from 'src/app/data/stay.model';

@Component({
  selector: 'uic-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
  @Input() lodgings: Lodging[];
  @Input()  
  reservation: Stay;

  query: string = 'test query';

  constructor() {}

  ngOnInit(): void {
    console.log(this.lodgings);
  }

  averageRating(lodging: Lodging) {
    const maxRating: number = 10;

    let ratings = lodging.reviews.map((review) => review.rating);
    let ratingSum = ratings.reduce((a, b) => a + b, 0);

    let stars = new Array<boolean>(maxRating);

    for (let i = 0; i < ratingSum; i++) {
      stars[maxRating - i] = true;
    }

    return stars;
  }

  makeReservation(){
    this.reservation = {
      id: '1',
      checkIn: new Date("2015-03-25"),
      checkOut: new Date("2015-03-25"),
      dateCreated: new Date(),
      dateModified: new Date("2015-03-25"),
    }
  }
}
