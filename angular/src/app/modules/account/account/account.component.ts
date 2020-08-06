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
import { AddressComponent } from '../address/address.component';
import { PaymentComponent } from '../payment/payment.component';
import { ProfileComponent } from '../profile/profile.component';

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

  constructor(private readonly accountService: AccountService) {}

  ngOnInit(): void {
    this.account$ = this.accountService.get('100');
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

  public updateAccountProfile(profile: Profile[]): void {
    const addressComponent = new AddressComponent();
    const paymentComponent = new PaymentComponent();
    this.accountService
      .put({
        id: `${this.account$.pipe(map((account) => account.id))}`,
        profiles: profile,
        address: addressComponent.address,
        payments: paymentComponent.payments,
      } as Account)
      .subscribe();
  }
  public updateAccountPayment(payment: Payment[]): void {
    const addressComponent = new AddressComponent();
    const profilesComponent = new ProfileComponent();
    this.accountService
      .put({
        id: `${this.account$.pipe(map((account) => account.id))}`,
        profiles: profilesComponent.profiles,
        address: addressComponent.address,
        payments: payment,
      } as Account)
      .subscribe();
  }
  public updateAccountAddress(address: Address): void {
    const paymentComponent = new PaymentComponent();
    const profilesComponent = new ProfileComponent();
    this.accountService
      .put({
        id: `${this.account$.pipe(map((account) => account.id))}`,
        profiles: profilesComponent.profiles,
        address,
        payments: paymentComponent.payments,
      } as Account)
      .subscribe();
  }
}
