import { Component, OnInit } from '@angular/core';
import { LodgingService } from '../../../services/lodging/lodging.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Booking } from 'src/app/data/booking.model';
import { Lodging } from 'src/app/data/lodging.model';

@Component({
  selector: 'uic-spotlight',
  templateUrl: './spotlight.component.html',
  styleUrls: ['./spotlight.component.scss'],
})
export class SpotlightComponent implements OnInit {
  bookings$: Observable<Booking[]>;
  lodgings$: Observable<Lodging[]>;
  selectedLodging: Lodging;

  constructor(private readonly lodgingService: LodgingService) {}

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

    this.setSpotlight();
  }

  setSpotlight(): void {
    let lodgingsArr = this.lodgings$.subscribe((value) => (lodgingsArr = value));

    let temp = 0;
    for (let i = 0; i < lodgingsArr.length; i++) {
      if (lodgingsArr[i].rentals.length > temp) {
        temp = lodgingsArr[i].rentals.length;
        this.selectedLodging = lodgingsArr[i];
      }
    }
  }
}
