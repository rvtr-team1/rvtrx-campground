import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of, Observable } from 'rxjs';
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
      name: 'Test',
      bathrooms: 1,
      rentals: [
        {
          id: '1',
          name: 'testRental',
          status: 'available',
          price: 100,
          rentalUnit: {
            id: '1',
            bedroom: {
              id: '1',
              count: 4,
              type: 'Queen Bed',
            },
            name: 'Family Room',
            occupancy: 5,
            type: 'testType',
          },
        },
        {
          id: '2',
          name: 'testRental',
          status: 'available',
          price: 100,
          rentalUnit: {
            id: '1',
            bedroom: {
              id: '1',
              count: 4,
              type: 'Queen Bed',
            },
            name: 'Family Room',
            occupancy: 5,
            type: 'testType',
          },
        },
        {
          id: '3',
          name: 'testRental',
          status: 'available',
          price: 100,
          rentalUnit: {
            id: '2',
            bedroom: {
              id: '1',
              count: 4,
              type: 'King Bed',
            },
            name: 'Family Room',
            occupancy: 5,
            type: 'testType',
          },
        },
      ],
      reviews: [
        {
          id: '1',
          accountId: '1',
          hotelId: '1',
          comment: 'comment',
          dateCreated: '2019-02-05',
          rating: 5,
        },
      ],
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

  it('should get rentalUnits', () => {
    expect(component.rentalUnits).toBeTruthy();
    expect(component.rentalUnits.length).toEqual(2);
  });

  it('should set availability count correctly', () => {
    expect(component.availabilityCount.get('1')).toEqual(2);
  });

  it('should call setRentalUnit', () => {
    spyOn(component, 'setRentalUnits');
    component.ngOnInit();
    expect(component.setRentalUnits).toHaveBeenCalled();
  });

  it('should do nothing when lodgingService returns a bad response', () => {
    lodgings[0].rentals.forEach(rental => rental.status = 'booked');
    spyOn(component.availabilityCount, 'get');
    component.ngOnInit();
    expect(component.availabilityCount.get).toHaveBeenCalledTimes(0);
    lodgings[0].rentals.forEach(rental => rental.status = 'available');
  });

  it('should test the length of the rows', () => {
    expect(component.rentalUnits);
    fixture.detectChanges();
    const tableRows = fixture.nativeElement.querySelectorAll('tr');
    expect(tableRows.length).toBe(3);
  });

  it('should test the table headers', () => {
    expect(component.rentalUnits);
    const tableRows = fixture.nativeElement.querySelectorAll('tr');

    const headerRow = tableRows[0];
    expect(headerRow.cells[0].innerHTML).toContain('Room Type');
    expect(headerRow.cells[2].innerHTML).toContain('Rooms Available');
  });
});
