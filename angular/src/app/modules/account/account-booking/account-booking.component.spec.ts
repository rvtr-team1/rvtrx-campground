import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AccountBookingComponent } from './account-booking.component';
import { Booking } from 'src/app/data/booking.model';
import { Rental } from 'src/app/data/rental.model';
import { TentPlot} from 'src/app/data/tent.model';
import { RVPlot} from 'src/app/data/rv.model';
import { plotSize} from 'src/app/data/plotSize.model';
import { Amenities} from 'src/app/data/amenities.model';
describe('AccountBookingComponent', () => {
  const booking: Booking = {
    id: 'string',
    accountId: 'string',
    lodgingId: 'string',
    checkIn: '',
    checkOut: '',
    guests: [
      {
        id: 'string',
        type: 'string',
        email: 'string',
        familyName: '',
        givenName: '',
        phone: 'string',
      },
    ],
    rentals: [
      {
        id: '1',
      lotNumber: '1',
      properties: {
        size: {
          width: 5,
          height: 5
        },
        amenities : null,
        maximumCapacity: 2,
        name : "tent",
      },
      status: 'available',
      price: 100,
      },
    ],
  };
  let component: AccountBookingComponent;
  let fixture: ComponentFixture<AccountBookingComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AccountBookingComponent],
      }).compileComponents();
    })
  );

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
