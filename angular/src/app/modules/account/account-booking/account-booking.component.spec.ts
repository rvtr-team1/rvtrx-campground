import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AccountBookingComponent } from './account-booking.component';
describe('AccountBookingComponent', () => {
  const booking = {
    id: 'string',
    accountId: 'string',
    lodgingId: 'string',
    guests: [
      {
        id: 'string',
        email: 'string',
        name: {
          id: 'string',
          family: 'string',
          given: 'string',
        },
        phone: 'string',
      },
    ],
    rentals: [
      {
        id: 'string',
        name: 'string',
        status: 'string',
        price: 0.0,
        discountedPrice: 0.0,
        rentalUnit: {
          id: 'string',
          bedroom: {
            id: 'string',
            count: 2,
            type: 'string',
          },
          name: 'string',
          occupancy: 2,
          type: 'string',
        },
        availability: true
      },
    ],
    stay: {
      id: 'string',
      checkIn: new Date(),
      checkOut: new Date(),
      dateCreated: new Date(),
      dateModified: new Date(),
    },
    status: 'string',
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
