import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchBarComponent } from './search-bar.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { FormsModule, NgForm } from '@angular/forms';
import { LodgingService } from 'src/app/services/lodging/lodging.service';
import { BookingService } from 'src/app/services/booking/booking.service';
import { of } from 'rxjs';
import { Lodging } from 'src/app/data/lodging.model';
import { Booking } from 'src/app/data/booking.model';

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;

  const lodgings: Lodging[] = [
    {
      id: '1',
      location: {
        id: '1',
        address: {
          id: '1',
          city: 'testCity',
          country: 'testCountry',
          postalCode: 'testCode',
          stateProvince: 'testState',
          street: 'testStreet',
        },
        latitude: 'testLat',
        longitude: 'testLong',
      },
      name: 'Test',
      bathrooms: 1,
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
            name = "tent",
          },
          status: 'available',
          price: 100,
        },
        {
          id: '2',
          lotNumber: '2',
          properties: RV = {
            size: plotSize = {
              width: 5,
              height: 5,
            },
            ameneties : Ameneties = {
              voltage: 50,
              sewage: "yes",
              water: "yes",
            }
            maximumCapacity: 5,
            name = "tent",
          },
          status: 'available',
          price: 100,
        },
        {
          id: '3',
          lotNumber: '3',
          properties: Tent = {
            size: plotSize = {
              width: 5,
              height: 5
            },
            ameneties : Ameneties
            maximumCapacity: 2,
            name = "tent",
          },
          status: 'available',
          price: 100,
        },
        {
          id: '4',
          lotNumber: '1',
          properties: RV = {
            size: plotSize = {
              width: 5,
              height: 5,
            },
            ameneties : Ameneties = {
              voltage: 50,
              sewage: "yes",
              water: "yes",
            }
            maximumCapacity: 5,
            name = "RV",
          },
          status: 'available',
          price: 100,
        },
  ];

  const bookings: Booking[] = [
    {
      id: '',
      accountId: '',
      lodgingId: '',
      checkIn: '',
      checkOut: '',
      guests: [],
      rentals: [],
    },
  ];

  const testForm = {
    value: {
      adults: '',
      children: '',
      location: '',
      checkin: '',
      checkout: '',
    },
  } as NgForm;

  const lodgingService = jasmine.createSpyObj('LodgingService', ['getAvailable']);
  const bookingService = jasmine.createSpyObj('BookingService', ['getByDateRange']);

  lodgingService.getAvailable.and.returnValue(of(lodgings));
  bookingService.getByDateRange.and.returnValue(of(bookings));

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule, FormsModule],
        declarations: [SearchBarComponent],
        providers: [
          { provide: LodgingService, useValue: lodgingService },
          { provide: BookingService, useValue: bookingService },
        ],
      }).compileComponents();

      TestBed.inject(HttpClient);
      TestBed.inject(HttpTestingController);
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should submit', () => {
    const searchResultsSpy = spyOn(component.searchResults, 'emit');
    const isSearchedSpy = spyOn(component.isSearched, 'emit');

    component.onSubmit(testForm).then(() => {
      expect(lodgingService.getAvailable).toHaveBeenCalled();
      expect(bookingService.getByDateRange).toHaveBeenCalled();

      expect(searchResultsSpy).toHaveBeenCalled();
      expect(isSearchedSpy).toHaveBeenCalledWith(true);
    });
  });

  it('should emit on click', () => {
    const isSearchSpy = spyOn(component.isSearched, 'emit');

    const nativeElement = fixture.nativeElement;
    const clearButton = nativeElement.querySelector('#clearButton');

    clearButton.dispatchEvent(new Event('click'));
    fixture.detectChanges();

    expect(isSearchSpy).toHaveBeenCalledWith(false);
  });
});
