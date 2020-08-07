import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LodgingHomeComponent } from './lodging-home.component';
import { of } from 'rxjs';
import { Lodging } from 'src/app/data/lodging.model';
import { LodgingService } from 'src/app/services/lodging/lodging.service';
import { HttpErrorResponse } from '@angular/common/http';

describe('LodgingHomeComponent', () => {
  let component: LodgingHomeComponent;
  let fixture: ComponentFixture<LodgingHomeComponent>;

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

  beforeEach(async(() => {
    const lodgingService = jasmine.createSpyObj('LodgingService', ['get']);
    lodgingService.get.and.returnValue(of(lodgings));

    TestBed.configureTestingModule({
      declarations: [LodgingHomeComponent],
      providers: [{ provide: LodgingService, useValue: lodgingService }],
    }).compileComponents();

    fixture = TestBed.createComponent(LodgingHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  /**
   * tests the whole lodging-home component
   */
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /**
   * tests if the lodges are returned correctly
   */
  it('should get lodgings on initialization', () => {
    expect(component.lodgings).toBeTruthy();
    expect(component.lodgings).toEqual(lodgings);
  });

  /**
   * tests if the lodging name and address is displayed in the template
   */
  it('should display lodging info in the template', () => {
    const info = fixture.debugElement.nativeElement.querySelectorAll('p');
    expect(info[0].textContent).toContain('test');
    expect(info[1].textContent).toContain('testStreet');
    expect(info[2].textContent).toContain('testCity, testState, testCountry');
    expect(info[3].textContent).toContain('testCode');
  });

  /**
   * tests the handle error function in lodging-home component
   */
  it('should get handleError', () => {
    expect(component.handleError).toBeTruthy();
  });

  /**
   * tests the handle error function to see if a 0 status code is sent it responds with a
   * unable to connect to server message
   */
  it('should return unable to connect to server message', () => {
    const errorMsg = new HttpErrorResponse({
      error: '0 error',
      status: 0,
      statusText: 'unable to connect to server',
    });

    component.handleError(errorMsg);
    expect(component.errorMessage).toBeTruthy();
    expect(component.errorMessage).toEqual('Unable to connect to server');
  });

  /**
   * tests the handle error function to see if it stores the correct status code in the errorMessage
   */
  it('should return status code in errorMessage', () => {
    const errorMsg = new HttpErrorResponse({
      error: '404 error',
      status: 404,
      statusText: 'Not Found',
    });

    component.handleError(errorMsg);
    expect(component.errorMessage).toBeTruthy();
    expect(component.errorMessage).toEqual('404');
  });
});
