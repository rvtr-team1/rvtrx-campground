import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { RentalComponent } from './rental.component';
import { LodgingService } from 'src/app/services/lodging/lodging.service';
import { Lodging } from 'src/app/data/lodging.model';
import { HttpErrorResponse } from '@angular/common/http';

describe('RentalComponent', () => {
  let component: RentalComponent;
  let fixture: ComponentFixture<RentalComponent>;

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
        locale: 'testLocale',
        longitude: 'testLong',
      },
      name: 'test',
      rentals: [],
      reviews: [],
      bathrooms: 1,
    },
  ];

  const lodgingService = jasmine.createSpyObj('LodgingService', ['get']);
  lodgingService.get.and.returnValue(of(lodgings));
  const rentalComponentSpy = jasmine.createSpyObj('RentalComponent', ['SetRentals']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RentalComponent],
      providers: [{ provide: LodgingService, useValue: lodgingService }],
    }).compileComponents();

    fixture = TestBed.createComponent(RentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get rental', () => {
    expect(component.lodgings![0].rentals).toBeTruthy();
    expect(component.lodgings![0].rentals).toEqual(lodgings[0].rentals);
  });

  it('should get handleError', () => {
    expect(component.handleError).toBeTruthy();
  });

  /**
   * tests the handle error function to see if a 0 status code is sent it responds with a
   * unable to connect to server message
   */
  it('should return unable to connect to server message', () => {
    const errorMsg = new HttpErrorResponse({
      error: '0 error',
      status: 0,
      statusText: 'unable to connect to server',
    });

    component.handleError(errorMsg);
    expect(component.errorMessage).toBeTruthy();
    expect(component.errorMessage).toEqual('Unable to connect to server');
  });

  /**
   * tests the handle error function to see if it stores the correct status code in the errorMessage
   */
  it('should return status code in errorMessage', () => {
    const errorMsg = new HttpErrorResponse({
      error: '404 error',
      status: 404,
      statusText: 'Not Found',
    });

    component.handleError(errorMsg);
    expect(component.errorMessage).toBeTruthy();
    expect(component.errorMessage).toEqual('404');
  });
  it('should have valid values', () => {
    expect(component.lodgings![0].location.address).toEqual(lodgings[0].location.address);
    expect(component.lodgings![0].location.latitude).toEqual(lodgings[0].location.latitude);
    expect(component.lodgings![0].location.longitude).toEqual(lodgings[0].location.longitude);
    expect(component.lodgings![0].location.locale).toEqual(lodgings[0].location.locale);
    expect(component.lodgings![0].name).toEqual(lodgings[0].name);
  });

  it('should ensure Rental Component public methods are called', () => {
    rentalComponentSpy.SetRentals();
    expect(rentalComponentSpy.SetRentals).toHaveBeenCalledTimes(1);
  });
});
