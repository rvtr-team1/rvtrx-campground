import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, scan } from 'rxjs/operators';
import { Account } from '../../../data/account.model';
import { Address } from '../../../data/address.model';
import { Booking } from '../../../data/booking.model';
import { Payment } from '../../../data/payment.model';
import { Profile } from '../../../data/profile.model';
import { Review } from '../../../data/review.model';
import { AccountService } from '../../../services/account/account.service';
import { EditingService } from '../editingservice.service';

@Component({
  selector: 'uic-account',
  templateUrl: './account.component.html',
})
export class AccountComponent implements OnInit {
  account$: Observable<Account>;
  address$: Observable<Address>;
  bookings$: Observable<Booking[]>;
  payments$: Observable<Payment[]>;
  profiles$: Observable<Profile[]>;
  reviews$: Observable<Review[]>;

  private readonly id = '100';
  private readonly editUpdates = this.editingService
    .subject()
    .pipe(
      scan((acc, curr) => (typeof curr === 'object' ? Object.assign({}, acc, curr) : null), {})
    );

  private readonly subscribe = this.editUpdates.subscribe((val) => this.update(val));

  constructor(
    private readonly accountService: AccountService,
    private readonly editingService: EditingService
  ) {}

  ngOnInit(): void {
    this.account$ = this.accountService.get(this.id);
    this.bookings$ = of([
      {
        id: '100',
        accountId: '100',
        lodgingId: '100',
        guests: [],
        rentals: [],
        stay: {
          id: '100',
          checkIn: new Date(2020, 10, 1),
          checkOut: new Date(2020, 10, 30),
          dateCreated: new Date(2020, 10, 1),
          dateModified: new Date(2020, 10, 1),
        },
        status: '',
      },
      {
        id: '200',
        accountId: '100',
        lodgingId: '100',
        guests: [],
        rentals: [],
        stay: {
          id: '100',
          checkIn: new Date(2020, 11, 1),
          checkOut: new Date(2020, 11, 31),
          dateCreated: new Date(2020, 10, 1),
          dateModified: new Date(2020, 10, 1),
        },
        status: '',
      },
    ]);
    this.reviews$ = of([
      {
        id: '100',
        accountId: '100',
        hotelId: '100',
        comment: '',
        dateCreated: new Date(2020, 8, 1),
        rating: 8.0,
      },
      {
        id: '100',
        accountId: '100',
        hotelId: '200',
        comment: '',
        dateCreated: new Date(2020, 9, 1),
        rating: 8.5,
      },
    ]);
    this.address$ = this.account$.pipe(map((account) => account.address));
    this.payments$ = this.account$.pipe(map((account) => account.payments));
    this.profiles$ = this.account$.pipe(map((account) => account.profiles));
  }

  public update(payload: any): void {
    if (this.validateManifest(payload)) {
      console.log(JSON.stringify(payload));
    }
  }

  private validateManifest(payload: any) {
    if (payload && payload.Address !== undefined && payload.profiles !== undefined) {
      return true;
    }
    return false;
  }
}
