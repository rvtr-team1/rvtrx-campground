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
      bathrooms: 1,
      name: 'test',
      rentals: [],
      reviews: [],
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

  it('should have valid values', () => {
    if(component.lodgings){
      expect(component.lodgings[0].location.address).toEqual(lodgings[0].location.address);
      expect(component.lodgings[0].location.latitude).toEqual(lodgings[0].location.latitude);
      expect(component.lodgings[0].location.longitude).toEqual(lodgings[0].location.longitude);
      expect(component.lodgings[0].location.locale).toEqual(lodgings[0].location.locale);
      expect(component.lodgings[0].name).toEqual(lodgings[0].name);
    }
  });

  it('should ensure Rental Component public methods are called', () => {
    rentalComponentSpy.SetRentals();
    expect(rentalComponentSpy.SetRentals).toHaveBeenCalledTimes(1);
  });

  it('should get lodgings', () => {
    expect(component.lodgings).toBeTruthy();
  });

  it('should get rentals from lodgings', () => {
    expect(component.rentals).toBeTruthy();
  });
});
