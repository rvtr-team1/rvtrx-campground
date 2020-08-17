import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, NO_ERRORS_SCHEMA, Input } from '@angular/core';
import { of, Observable } from 'rxjs';
import { AccountComponent } from './account.component';
import { AccountBookingComponent } from '../account-booking/account-booking.component';
import { AccountReviewComponent } from '../account-review/account-review.component';
import { AddressComponent } from '../address/address.component';
import { PaymentComponent } from '../payment/payment.component';
import { ProfileComponent } from '../profile/profile.component';
import { Account } from '../../../data/account.model';
import { AccountService } from '../../../services/account/account.service';
import { ACCOUNT_EDITING_SERVICE } from '../account-editing.token';

describe('AccountComponent', () => {
  const accountServiceStub = {
    get() {
      const account: Account = {
        id: '',
        address: {
          id: '',
          city: '',
          country: '',
          postalCode: '',
          stateProvince: '',
          street: '',
        },
        payments: [],
        profiles: [],
      };
      return of(account);
    },
    put(acct: Account) {
      return of();
    },
  };
  const mockEditingService = {
    payloadEmitter: new Observable<Partial<Account>>(),
    update() {},
  };

  let component: AccountComponent;
  let fixture: ComponentFixture<AccountComponent>;

  @Component({ selector: 'uic-editable', template: '' })
  class EditableStubComponent {
    @Input('data')
    data: string;
    @Input('editMode')
    editMode = false;
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AccountComponent,
        AccountBookingComponent,
        AccountReviewComponent,
        AddressComponent,
        PaymentComponent,
        ProfileComponent,
        EditableStubComponent,
      ],
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: ACCOUNT_EDITING_SERVICE,
          useValue: mockEditingService,
        },
        { provide: AccountService, useValue: accountServiceStub },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
