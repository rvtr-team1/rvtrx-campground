import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BookingComponent } from './booking.component';
import { LodgingService } from 'src/app/services/lodging/lodging.service';
import { of } from 'rxjs';
import { SearchResultsComponent } from '../search-results/search-results.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { FeaturedLodgingComponent } from '../featured-lodging/featured-lodging.component';
import { SpotlightComponent } from '../spotlight/spotlight.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';

describe('BookingComponent', () => {
  let component: BookingComponent;
  let fixture: ComponentFixture<BookingComponent>;

  const lodgingServiceStub = {
    get() {
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
              id: '',
              name: '',
              price: 0,
              rentalUnit: {
                id: '',
                bedroom: {
                  id: '',
                  count: 1,
                  type: '',
                },
                name: '',
                occupancy: 1,
                type: '',
              },
              status: 'available',
            },
          ],
          reviews: [
            {
              id: '1',
              accountId: '1',
              hotelId: '1',
              comment: 'comment',
              dateCreated: '2020-08-01',
              rating: 1,
            },
          ],
          bathrooms: [
            {
              id: '',
              fixture: 1,
            },
          ],
        },
      ]);
    },
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BookingComponent,
        SearchBarComponent,
        SearchResultsComponent,
        FeaturedLodgingComponent,
        SpotlightComponent,
      ],
      imports: [HttpClientTestingModule, FormsModule],
      providers: [{ provide: LodgingService, useValue: lodgingServiceStub }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
