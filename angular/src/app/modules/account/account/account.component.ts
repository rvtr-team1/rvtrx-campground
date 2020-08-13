import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Account } from '../../../data/account.model';
import { Address } from '../../../data/address.model';
import { Booking } from '../../../data/booking.model';
import { Payment } from '../../../data/payment.model';
import { Profile } from '../../../data/profile.model';
import { Review } from '../../../data/review.model';
import { AccountService } from '../../../services/account/account.service';
import { AccountEditingService } from '../services/account.editing.service';

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

  private readonly id = '1';

  constructor(
    private readonly accountService: AccountService,
    private readonly editingService: AccountEditingService
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
          checkIn: '2020-10-01',
          checkOut: '2020-10-01',
          dateCreated: '2020-10-01',
          dateModified: '2020-10-01',
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
          checkIn: '2020-11-01',
          checkOut: '2020-10-01',
          dateCreated: '2020-10-01',
          dateModified: '2020-10-01',
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
        dateCreated: '2020-08-01',
        rating: 8.0,
      },
      {
        id: '100',
        accountId: '100',
        hotelId: '200',
        comment: '',
        dateCreated: '2020-09-01',
        rating: 8.5,
      },
    ]);
    this.address$ = this.account$.pipe(map((account) => account.address));
    this.payments$ = this.account$.pipe(map((account) => account.payments));
    this.profiles$ = this.account$.pipe(map((account) => account.profiles));
    /**
     * Pass initial model to editingService
     */
    this.account$.pipe(map((account) => this.editingService.update(account)));
    /**
     * Register function for Payload release from editing service
     */
    this.editingService.PayloadEmitter.subscribe((val: Account) => this.update(val));
  }

  private update(payload: Account): void {
    this.accountService.put(payload).subscribe({
      next: (e) => this.accountService.put(e),
      error: (e) => console.log(e),
    });
  }
}
