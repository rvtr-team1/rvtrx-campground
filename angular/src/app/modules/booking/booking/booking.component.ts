import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Lodging } from 'src/app/data/lodging.model';
import { LodgingService } from 'src/app/services/lodging/lodging.service';

@Component({
  selector: 'uic-booking',
  templateUrl: './booking.component.html',
})
export class BookingComponent implements OnInit {
  lodgings$: Observable<Lodging[]>;

  constructor(private lodgingService: LodgingService) {}

  ngOnInit(): void {
    this.lodgings$ = this.lodgingService.get();

    this.lodgings$.pipe(
      map((lodgings) => {
        lodgings.map((lodging) => lodging.rentals);
      })
    );

    this.lodgings$.pipe(
      map((lodgings) => {
        lodgings.map((lodging) => lodging.reviews);
      })
    );
  }
}
