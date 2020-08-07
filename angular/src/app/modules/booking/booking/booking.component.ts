import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Lodging } from 'src/app/data/lodging.model';
import { LodgingService } from 'src/app/services/lodging/lodging.service';
import { map } from 'rxjs/operators';
import { Review } from 'src/app/data/review.model';

@Component({
  selector: 'uic-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {
  lodgings$: Observable<Lodging[]>;
  isSearched = false;

  constructor(private readonly lodgingService: LodgingService) {}

  ngOnInit(): void {
    this.lodgings$ = this.lodgingService.get();

    function mapDates(reviews: Review[]): Review[] {
      return reviews.map((review) => {
        review.dateCreated = new Date(review.dateCreated);
        return review;
      });
    }

    this.lodgings$.pipe(
      map((lodgings) => lodgings.map((lodging) => (lodging.reviews = mapDates(lodging.reviews))))
    );
  }
}
