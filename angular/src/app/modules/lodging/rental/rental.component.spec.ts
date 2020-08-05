import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalComponent } from './rental.component';
import { Router } from '@angular/router';
import { RentalService } from 'src/app/services/lodging/rental/rental.service';
import { TemplateDefinitionBuilder } from '@angular/compiler/src/render3/view/template';

describe('RentalComponent', () => {
  let component: RentalComponent;
  let fixture: ComponentFixture<RentalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RentalComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('Rental component routing', () => {
  let component: RentalComponent;
  let fixture: ComponentFixture<RentalComponent>;

  

  beforeEach(async(() => {
    const rentalServiceSpy = jasmine.createSpyObj('RentalService', ['get']);
    //getRentalSpy = rentalServiceSpy.get().and.returnValue(of());

    TestBed.configureTestingModule({
      declarations: [RentalComponent],
      providers: [{ provide: RentalService, useValue: rentalServiceSpy }],
    });

    fixture = TestBed.createComponent(RentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  //temporary test until the rental component is complete
  it('should return rental', () => {
    expect(component).toBeTruthy();
  });
});
