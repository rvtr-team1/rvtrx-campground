import { Component, Input, OnInit } from '@angular/core';
import { Lodging } from 'src/app/data/lodging.model';

@Component({
  selector: 'uic-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
  @Input() lodgings: Lodging[];
  query: string = 'test query';

  constructor() {}

  ngOnInit(): void {}

  averageRating(lodging: Lodging) {
    const maxRating: number = 10;

    let ratings = lodging.reviews.map((review) => review.rating);
    let ratingSum = ratings.reduce((a, b) => a + b, 0);

    let stars = new Array<boolean>(maxRating);

    for (let i = 0; i < Math.floor(ratingSum / ratings.length); i++) {
      stars[maxRating - i] = true;
    }

    return stars;
  }
}
