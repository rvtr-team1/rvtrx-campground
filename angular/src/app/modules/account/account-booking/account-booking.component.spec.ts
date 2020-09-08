import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AccountBookingComponent } from './account-booking.component';
import { Booking } from 'src/app/data/booking.model';
import { Tent} from '../tent.model';
import { RV} from '../rv.model';
import { plotSize} from '../plotSize.model';
import { Ameneties} from '../ameneties.model';
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
      properties: Tent = {
        size: plotSize = {
          width: 5,
          height: 5
        },
        ameneties : Ameneties
        maximumCapacity: 2,
        name = "tent"
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
