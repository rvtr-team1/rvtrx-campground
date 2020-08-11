import { Component, Input, OnInit } from '@angular/core';
import { Lodging } from 'src/app/data/lodging.model';
import { Rental } from 'src/app/data/rental.model';
import { Booking } from 'src/app/data/booking.model';
import { BookingService } from 'src/app/services/booking/booking.service';

@Component({
  selector: 'uic-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
  @Input() lodgings: Lodging[] | null;
  reservation: Booking;
  query = 'test query';

  constructor(private bookingService: BookingService) {}

  ngOnInit(): void {}

  averageRating(lodging: Lodging) {
    const maxRating = 10;

    const ratings = lodging.reviews.map((review) => review.rating);
    const ratingSum = ratings.reduce((a, b) => a + b, 0);

    const stars = new Array<boolean>(maxRating);

    const avgRating = Math.floor(ratingSum / ratings.length);

    stars.fill(false, 0, maxRating - avgRating);
    stars.fill(true, maxRating - avgRating, maxRating);

    return stars;
  }

  makeReservation(lodging: Lodging, rental: Rental) {
    this.reservation = {
      id: '1',
      lodgingId: lodging.id,
      guests: [],
      accountId: '1',
      rentals: [],
      stay: {
        id: '',
        dateCreated: new Date(Date.now()),
        dateModified: new Date(Date.now()),
        checkIn: new Date(Date.now()),
        checkOut: new Date(Date.now()),
      },
    };
    this.bookingService.post(this.reservation);
  }
}
