import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LodgingHomeComponent } from './lodging-home.component';
import { of } from 'rxjs';
import { Lodging } from 'src/app/data/lodging.model';
import { LodgingService } from 'src/app/services/lodging/lodging.service';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('LodgingHomeComponent', () => {
  let component: LodgingHomeComponent;
  let fixture: ComponentFixture<LodgingHomeComponent>;
  let debugElement: DebugElement;
  const lodgings: Lodging[] =
    [
      {
        id: "1",
        location: {
          id: "1",
          address: {
            id: "1",
            city: "testCity",
            country: "testCountry",
            postalCode: "testCode",
            stateProvince: "testState",
            street: "testStreet"
          },
          latitude: "testLat",
          locale: "testLocale",
          longitude: "testLong"
        },
        name: "test",
        rentals: [],
        reviews: []
      }
    ]; 
  beforeEach(async(() => {
    
    const lodgingService = jasmine.createSpyObj('LodgingService', ['get']);
    lodgingService.get.and.returnValue(of(lodgings));

    TestBed.configureTestingModule({
      declarations: [ LodgingHomeComponent ],
      providers: [
        {provide: LodgingService, useValue: lodgingService}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LodgingHomeComponent);
    component = fixture.componentInstance;
    let debugElement = fixture.debugElement;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get lodgings on initialization', () => {
    expect(component.lodgings).toBeTruthy();
    expect(component.lodgings).toEqual(lodgings);
  })
  
});
