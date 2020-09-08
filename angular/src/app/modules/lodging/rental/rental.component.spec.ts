import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { RentalComponent } from './rental.component';
import { Rental } from 'src/app/data/rental.model';
import { Tent} from '../tent.model';
import { RV} from '../rv.model';
import { plotSize} from '../plotSize.model';
import { Ameneties} from '../ameneties.model';

describe('RentalComponent', () => {
  let component: RentalComponent;
  let fixture: ComponentFixture<RentalComponent>;

  const rentals: Rental[] = [
    {
      id: '1',
      lotNumber: '1',
      properties: Tent = {
        size: plotSize = {
          width: 5,
          height: 5
        },
        ameneties : Ameneties,
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
        ameneties : Ameneties,
        maximumCapacity: 2,
        name = "tent"
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
          height: 5
        },
        ameneties : Ameneties = {
          voltage: 50,
          sewage: "yes",
          water: "yes",
        }
        maximumCapacity: 5,
        name = "RV"
      },
      status: 'available',
      price: 100,
    },
  ];

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [RentalComponent],
      }).compileComponents();

      fixture = TestBed.createComponent(RentalComponent);
      component = fixture.componentInstance;
      component.rentals = rentals;
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set rentalTypes', () => {
    expect(component.rentalTypes).toBeTruthy();
    expect(component.rentalTypes.length).toEqual(2);
  });

  it('should set availability count correctly', () => {
    expect(component.availabilityCount.get('tent')).toEqual(2);
  });

  it('should have none available', () => {
    expect(component.availabilityCount.get('cabin')).toEqual(0);
  });

  it('should call setRentals', () => {
    spyOn(component, 'setRentalTypes');
    component.ngOnInit();
    expect(component.setRentalTypes).toHaveBeenCalled();
  });

  it('should test the length of the rows', () => {
    const tableRows = fixture.nativeElement.querySelectorAll('tr');
    expect(tableRows.length).toBe(3);
  });

  it('should test the table headers', () => {
    const tableRows = fixture.nativeElement.querySelectorAll('tr');
    const headerRow = tableRows[0];
    expect(headerRow.cells[0].innerHTML).toContain('Site');
    expect(headerRow.cells[2].innerHTML).toContain('Sites Available');
  });
});
