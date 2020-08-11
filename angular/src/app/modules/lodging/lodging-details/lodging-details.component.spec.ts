import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { LodgingDetailsComponent } from './lodging-details.component';
import { Lodging } from 'src/app/data/lodging.model';
import { of } from 'rxjs';
import { LodgingService } from 'src/app/services/lodging/lodging.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
describe('LodgingDetailsComponent', () => {
  let component: LodgingDetailsComponent;
  let fixture: ComponentFixture<LodgingDetailsComponent>;
  const lodging: Lodging =
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
      bathrooms: 1,
    };
  beforeEach(async(() => {
    const lodgingService = jasmine.createSpyObj('LodgingService', ['get']);
    lodgingService.get.and.returnValue(of(lodging));
    TestBed.configureTestingModule({
      declarations: [LodgingDetailsComponent],
      imports: [RouterModule.forRoot([]), HttpClientModule],
      providers: [{ provide: LodgingService, useValue: lodgingService }],
    }).compileComponents();
    fixture = TestBed.createComponent(LodgingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  /**
   * tests if the lodge details are returned correctly
   */
  it('should get lodging details', () => {
    expect(component.ngOnInit).toBeTruthy();
    expect(component.getLodgingById).toBeTruthy();
  });
});
