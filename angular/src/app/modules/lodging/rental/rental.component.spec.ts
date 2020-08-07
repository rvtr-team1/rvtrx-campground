import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { RentalComponent } from './rental.component';
import { LodgingService } from 'src/app/services/lodging/lodging.service';
import { Lodging } from 'src/app/data/lodging.model';

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
      bathrooms: [],
    },
  ];

  const lodgingService = jasmine.createSpyObj('LodgingService', ['get']);
  lodgingService.get.and.returnValue(of(lodgings));

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
    expect(component.lodgings![0].location.address).toEqual(lodgings[0].location.address);
    expect(component.lodgings![0].location.latitude).toEqual(lodgings[0].location.latitude);
    expect(component.lodgings![0].location.longitude).toEqual(lodgings[0].location.longitude);
    expect(component.lodgings![0].location.locale).toEqual(lodgings[0].location.locale);
    expect(component.lodgings![0].name).toEqual(lodgings[0].name);
  });
});
