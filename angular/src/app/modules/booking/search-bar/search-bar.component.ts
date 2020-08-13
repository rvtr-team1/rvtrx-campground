import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { forkJoin } from 'rxjs';
import { BookingService } from 'src/app/services/booking/booking.service';
import { Lodging } from '../../../data/lodging.model';
import { LodgingService } from '../../../services/lodging/lodging.service';

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
    const occupancy: string = form.value.adults + form.value.children;
    const city: string = form.value.location;

    const checkIn: string = form.value['check-in'];
    const checkOut: string = form.value['check-out'];

    const lodgings$ = this.lodgingService.getAvailable(city, occupancy);
    const bookings$ = this.bookingService.getByDateRange(checkIn, checkOut);

    forkJoin([lodgings$, bookings$]).subscribe(

      ([lodgings, bookings]) => {

        const bookedLodgingIds: string[] = bookings.map((booking) => booking.lodgingId);
        const availableLodgings: Lodging[] = lodgings.filter(
          (lodging) => !bookedLodgingIds.includes(lodging.id)
        );

        this.searchResults.emit(availableLodgings);
        this.isSearched.emit(true);
      }
    );
  }
}
