import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Lodging } from '../../../data/lodging.model';

import { LodgingService } from 'src/app/services/lodging/lodging.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'uic-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {
  lodgings$: Observable<Lodging[]>;
  isSearched: boolean = false;

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
    this.lodgings$.subscribe((value) => console.log(value));
  }
}
