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
<<<<<<< HEAD
    const occupancy = form.value.adults + form.value.children;
    const city = form.value.location;

    const checkIn = form.value['check-in'];
    const checkOut = form.value['check-out'];

    await this.searchByAll(checkIn, checkOut, city, occupancy);
    this.isSearched.emit(true);
  }

  private async getLodgingRentals(): Promise<Rental[]> {
    return this.lodgings$
      .pipe(
        map<Lodging[], Rental[]>((lodgings) => {
          const rentals = lodgings.map((lodging) => lodging.rentals);
          return rentals.reduce((a, b) => a.concat(b));
        })
      )
      .toPromise();
  }

  private async getAvailableRentals(checkIn: Date, checkOut: Date): Promise<Rental[]> {
    const lodgingRentals = await this.getLodgingRentals();

    // Find rentals that don't already exist in
    // bookings within the checkIn - checkOut range
    return this.bookings$
      .pipe(
        map((bookings) => {
          const availableRentals: Rental[] = [];

          for (const booking of bookings) {
            const bookingCheckIn = new Date(booking.checkIn);
            const bookingCheckOut = new Date(booking.checkOut);

            if (
              (checkIn < bookingCheckIn && checkOut < bookingCheckIn) ||
              (checkIn > bookingCheckOut && checkOut > bookingCheckOut)
            ) {
              for (const lodgingRental of lodgingRentals) {
                if (!booking.rentals.includes(lodgingRental)) {
                  availableRentals.push(lodgingRental);
                }
              }
            }
          }

          return availableRentals;
        })
      )
      .toPromise();
  }

  async searchByAll(checkIn: Date, checkOut: Date, city: string, occupancy: number) {
    const availableRentals: Rental[] = await this.getAvailableRentals(checkIn, checkOut);

    function isAvailable(rental: Rental) {
      for (const availableRental of availableRentals) {
        if (rental.id === availableRental.id) {
          return true;
        }
      }
      return false;
    }
=======
    const occupancy: string = form.value.adults + form.value.children;
    const city: string = form.value.location;
>>>>>>> 1d47f772b4f85a420694469da6a991064b689bdf

    const checkIn: string = form.value['check-in'];
    const checkOut: string = form.value['check-out'];

    const lodgings$ = this.lodgingService.getAvailable(city, occupancy);
    const bookings$ = this.bookingService.getByDateRange(checkIn, checkOut);

<<<<<<< HEAD
          for (const availableRental of availableLodgingRentals) {
            if (availableRental.occupancy >= occupancy) {
              searchResults.push(lodging);
              break;
            }
          }
        }
      }
=======
    forkJoin([lodgings$, bookings$]).subscribe(([lodgings, bookings]) => {
      const bookedLodgingIds: string[] = bookings.map((booking) => booking.lodgingId);
      const availableLodgings: Lodging[] = lodgings.filter(
        (lodging) => !bookedLodgingIds.includes(lodging.id)
      );
>>>>>>> 1d47f772b4f85a420694469da6a991064b689bdf

      this.searchResults.emit(availableLodgings);
      this.isSearched.emit(true);
    });
  }
}
