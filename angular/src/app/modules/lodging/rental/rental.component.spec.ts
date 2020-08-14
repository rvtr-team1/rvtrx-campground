import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RentalComponent } from './rental.component';
import { Lodging } from 'src/app/data/lodging.model';

describe('RentalComponent', () => {
  let component: RentalComponent;
  let fixture: ComponentFixture<RentalComponent>;

  const lodging: Lodging = {
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
        name: 'Rental1',
        occupancy: 2,
        type: 'tent',
        status: 'available',
        price: 100,
      },
      {
        id: '2',
        name: 'Rental2',
        occupancy: 2,
        type: 'tent',
        status: 'available',
        price: 100,
      },
      {
        id: '3',
        name: 'Rental3',
        occupancy: 2,
        type: 'cabin',
        status: 'available',
        price: 100,
      },
      {
        id: '4',
        name: 'Rental4',
        occupancy: 2,
        type: 'cabin',
        status: 'available',
        price: 100,
      },
    ],
    reviews: [],
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RentalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RentalComponent);
    component = fixture.componentInstance;
    component.lodging = lodging;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get rentals', () => {
    expect(component.rentals).toBeTruthy();
    expect(component.rentals.length).toEqual(2);
  });

  it('should set availability count correctly', () => {
    expect(component.availabilityCount.get('tent')).toEqual(2);
    expect(component.availabilityCount.get('cabin')).toEqual(2);
  });

  it('should call setRentals', () => {
    spyOn(component, 'setRentals');
    component.ngOnInit();
    expect(component.setRentals).toHaveBeenCalled();
  });

  it('should do nothing when lodgingService returns a bad response', () => {
    lodging.rentals.forEach((rental) => (rental.status = 'booked'));
    spyOn(component.availabilityCount, 'get');
    component.ngOnInit();
    expect(component.availabilityCount.get).toHaveBeenCalledTimes(0);
    lodging.rentals.forEach((rental) => (rental.status = 'available'));
  });

  it('should test the length of the rows', () => {
    expect(component.rentals);
    fixture.detectChanges();
    const tableRows = fixture.nativeElement.querySelectorAll('tr');
    expect(tableRows.length).toBe(3);
  });

  it('should test the table headers', () => {
    expect(component.rentals);
    const tableRows = fixture.nativeElement.querySelectorAll('tr');

    const headerRow = tableRows[0];
    expect(headerRow.cells[0].innerHTML).toContain('Room Type');
    expect(headerRow.cells[2].innerHTML).toContain('Rooms Available');
  });
});
