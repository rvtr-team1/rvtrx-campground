import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { RentalComponent } from './rental.component';
import { LodgingService } from 'src/app/services/lodging/lodging.service';
import { Lodging } from 'src/app/data/lodging.model';
import { HttpClientTestingModule } from '@angular/common/http/testing';

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
          status: 'booked',
          price: 100,
        },
        {
          id: '4',
          name: 'Rental4',
          occupancy: 2,
          type: 'cabin',
          status: 'booked',
          price: 100,
        },
      ],
      reviews: [],
    },
  ];

  const lodgingService = jasmine.createSpyObj('LodgingService', ['get']);
  lodgingService.get.and.returnValue(of(lodgings));

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RentalComponent],
      imports: [HttpClientTestingModule],
      providers: [{ provide: LodgingService, useValue: lodgingService }],
    }).compileComponents();

    fixture = TestBed.createComponent(RentalComponent);
    component = fixture.componentInstance;
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
  });

  it('should have none available', () => {
    expect(component.availabilityCount.get('cabin')).toEqual(0);
  });

  it('should call setRentals', () => {
    spyOn(component, 'setRentals');
    component.ngOnInit();
    expect(component.setRentals).toHaveBeenCalled();
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
