import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { RentalComponent } from './rental.component';
import { Router } from '@angular/router';
import { TemplateDefinitionBuilder } from '@angular/compiler/src/render3/view/template';
import { Rental } from 'src/app/data/rental.model';

describe('RentalComponent', () => {
  let component: RentalComponent;
  let fixture: ComponentFixture<RentalComponent>;

  const rentals: Rental[] = [
    {
      id: '1',
      name: 'testRental',
      rentalUnit: {
        id: '6',
        bedrooms: [
          {
            id: '1',
            count: 4,
            type: 'Queen Bed',
          },
        ],
        name: 'Family Room',
        occupancy: 5,
        type: 'testType',
      },
    },
  ];

  const rentalComponentSpy = jasmine.createSpyObj('RentalComponent', ['GetLength']);
  // rentalComponentSpy.get.and.returnValue(of(rentals));

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RentalComponent],
      providers: [{ provide: RentalComponent, useValue: rentalComponentSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(RentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get rental', () => {
    expect(component.rentals).toBeTruthy();
    expect(component.rentals).toEqual(rentals);
  });
});
