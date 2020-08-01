import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AccountBookingComponent } from './account-booking.component';

describe('AccountBookingComponent', () => {
  const booking = {
    id: '',
    accountId: '',
    lodgingId: '',
    guests: [],
    rentals: [],
    stay: {
      id: '',
      checkIn: new Date(),
      checkOut: new Date(),
      dateCreated: null,
      dateModified: null,
    },
    status: '',
  };

  let component: AccountBookingComponent;
  let fixture: ComponentFixture<AccountBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AccountBookingComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountBookingComponent);
    component = fixture.componentInstance;
    component.booking = booking;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
