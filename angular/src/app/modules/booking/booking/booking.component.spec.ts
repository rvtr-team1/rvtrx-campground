import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { BookingComponent } from './booking.component';
import { LodgingService } from 'src/app/services/lodging/lodging.service';
import { of, Observable } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Lodging } from 'src/app/data/lodging.model';
import { Rental } from 'src/app/data/rental.model';
import { TentPlot} from 'src/app/data/tent.model';
import { RVPlot} from 'src/app/data/rv.model';
import { plotSize} from 'src/app/data/plotSize.model';
import { Amenities} from 'src/app/data/amenities.model';
describe('BookingComponent', () => {
  let component: BookingComponent;
  let fixture: ComponentFixture<BookingComponent>;

  const lodgingServiceStub = {
    get(): Observable<Lodging[]> {
      return of([
        {
          id: '',
          location: {
            id: '',
            address: {
              id: '',
              city: '',
              country: '',
              postalCode: '',
              stateProvince: '',
              street: '',
            },
            latitude: '',
            locale: '',
            longitude: '',
          },
          name: '',
          rentals: [
            {
              id: '1',
      lotNumber: '1',
      properties:{
        size: {
          width: 5,
          height: 5
        },
        amenities : null,
        maximumCapacity: 2,
        name : "tent"
      },
      status: 'available',
      price: 100,
            },
          ],
          reviews: [
            {
              id: '1',
              comment: 'comment',
              dateCreated: '2020-08-01',
              rating: 1,
            },
          ],
          bathrooms: 1,
        },
      ]);
    },
  };

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [BookingComponent],
        imports: [HttpClientTestingModule, FormsModule],
        providers: [{ provide: LodgingService, useValue: lodgingServiceStub }],
        schemas: [NO_ERRORS_SCHEMA],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
