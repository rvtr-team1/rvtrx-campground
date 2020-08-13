import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable, forkJoin } from 'rxjs';
import { Rental } from '../../../data/rental.model';
import { Booking } from '../../../data/booking.model';
import { BookingService } from 'src/app/services/booking/booking.service';
import { Lodging } from '../../../data/lodging.model';
import { LodgingService } from '../../../services/lodging/lodging.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'uic-search-bar',
  templateUrl: './search-bar.component.html',
})
export class SearchBarComponent implements OnInit {

  @Output() searchResults = new EventEmitter<Lodging[]>();
  @Output() isSearched = new EventEmitter<boolean>();

  constructor(
    private readonly bookingService: BookingService,
    private readonly lodgingService: LodgingService
  ) {}

  ngOnInit(): void {}

  async onSubmit(form: NgForm) {
    const occupancy: number = form.value.adults + form.value.children;
    const city: string = form.value.location;

    const checkIn = form.value['check-in'];
    const checkOut = form.value['check-out'];

    let lodgings$ = this.lodgingService.getAvailable(city, occupancy);
    let bookings$ = this.bookingService.getByDateRange(checkIn, checkOut);

    forkJoin(lodgings$, bookings$).subscribe(

      ([lodgings, bookings]) => {

        let bookedLodgingIds: string[] = bookings.map((booking) => booking.lodgingId);
        let availableLodgings: Lodging[] = lodgings.filter(
          (lodging) => !bookedLodgingIds.includes(lodging.id)
        );

        this.searchResults.emit(availableLodgings);
        this.isSearched.emit(true);
      }
    );
  }
}
