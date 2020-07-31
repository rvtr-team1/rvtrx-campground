import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AccountComponent } from './account.component';
import { AddressComponent } from '../address/address.component';
import { PaymentComponent } from '../payment/payment.component';
import { of, asyncScheduler, scheduled } from 'rxjs';
import { AccountService } from 'src/app/services/account/account.service';
import { Account } from 'src/app/data/account.model';

describe('AccountComponent', () => {
  const accountServiceStub = {
    get() {
      const account: Account = {
        id: '',
        name: '',
        address: {
          id: '',
          city: '',
          country: '',
          postalCode: '',
          stateProvince: '',
          street: '',
        },
        payments: null,
        profiles: null,
      };

      // return scheduled([account], asyncScheduler);
      return of(account);
    },
  };

  let component: AccountComponent;
  let fixture: ComponentFixture<AccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AccountComponent, AddressComponent, PaymentComponent],
      imports: [HttpClientTestingModule],
      providers: [{ provide: AccountService, useValue: accountServiceStub }],
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
