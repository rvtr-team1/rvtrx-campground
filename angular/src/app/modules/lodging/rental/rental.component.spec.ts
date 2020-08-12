import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { RentalComponent } from './rental.component';
import { LodgingService } from 'src/app/services/lodging/lodging.service';
import { Lodging } from 'src/app/data/lodging.model';
import { DebugElement } from '@angular/core';
import { By } from 'protractor';
import { repeat } from 'rxjs/operators';

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
  //const rentalSpy = jasmine.createSpyObj('RentalComponent', ['setRentalUnit']);

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
  });

  it('should test the length of the rows', () =>{
    expect(component.rentalUnits)

    fixture.detectChanges();
    
      
    let tableRows = fixture.nativeElement.querySelectorAll('tr');
      
    expect(tableRows.length).toBe(1);
   
    
  });

  it('should test the table headers', () =>{
    expect(component.rentalUnits);
    let tableRows = fixture.nativeElement.querySelectorAll('tr');

    //Header row
    let headerRow = tableRows[0];
    expect(headerRow.cells[0].innerHTML).toBe('Room Type');
    expect(headerRow.cells[2].innerHTML).toBe('Rooms Available');

  });

  
});
