import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
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
    const occupancy = form.value.adults + form.value.children;
    const city = form.value.location;

    const checkIn = form.value['check-in'];
    const checkOut = form.value['check-out'];

    this.lodgingService.getAvailable(city, occupancy).subscribe(
      (lodgings) => {

        let bookedLodgingIds = []

        this.bookingService.getByDateRange(checkIn, checkOut).subscribe(
          (bookings) => {

            for (const booking of bookings) {
              bookedLodgingIds.push(booking.lodgingId);
            }
          }
        );
        
        let availableLodgings = lodgings.filter((lodging) => !bookedLodgingIds.includes(lodging.id));

        this.searchResults.emit(availableLodgings);
        this.isSearched.emit(true);
      }
    )
  }
}
