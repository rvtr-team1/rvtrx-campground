import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { RentalComponent } from './rental.component';
import { Rental } from 'src/app/data/rental.model';
import { LodgingService } from 'src/app/services/lodging/lodging.service';
import { HttpClient } from '@angular/common/http';

describe('RentalComponent', () => {
  let component: RentalComponent;
  let fixture: ComponentFixture<RentalComponent>;

  const rentals: Rental[] = [
    {
      id: '1',
      name: 'testRental',
      rentalUnit: {
        id: '6',
        bedrooms: {
          id: '1',
          count: 3, //Number of beds
          type: 'Queen Bed'
        },
        name: 'Family Room',
        occupancy: 5,
        type: 'testType',
      },
      availability: true
    },
  ];

  //Create HTTPClientSpy and place it in the providers to fix NullInjectorError
  const HTTPClientSpy = jasmine.createSpyObj('HttpClient', ['get'])
  const rentalComponentSpy = jasmine.createSpyObj('LodgingService', ['get']);
  rentalComponentSpy.get.and.returnValue(of(rentals));

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RentalComponent],
      providers: [{ provide: LodgingService, useValue: rentalComponentSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(RentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get rental', () => {
    expect(component.lodgings).toBeTruthy();
    //expect(component.lodgings).toEqual(rentals);
  });
});