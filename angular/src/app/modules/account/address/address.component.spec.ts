import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddressComponent } from './address.component';
import { Account } from '../../../data/account.model';
import { AccountService } from '../../../services/account/account.service';

describe('AddressComponent', () => {
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
  };
  const address = {
    id: '',
    city: '',
    country: '',
    postalCode: '',
    stateProvince: '',
    street: '',
  };

  let component: AddressComponent;
  let fixture: ComponentFixture<AddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [AddressComponent],
      providers: [{ provide: AccountService, useValue: accountServiceStub }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressComponent);
    component = fixture.componentInstance;
    component.address = address;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
