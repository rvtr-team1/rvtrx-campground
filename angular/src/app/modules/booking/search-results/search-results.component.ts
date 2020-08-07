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

  ngOnInit(): void {}

  averageRating(lodging: Lodging) {
    const maxRating: number = 10;

    let ratings = lodging.reviews.map((review) => review.rating);
    let ratingSum = ratings.reduce((a, b) => a + b, 0);

    let stars = new Array<boolean>(maxRating);

    let avgRating = Math.floor(ratingSum / ratings.length);

    stars.fill(false, 0, maxRating - avgRating);
    stars.fill(true, maxRating - avgRating, maxRating);

    return stars;
  }
}
