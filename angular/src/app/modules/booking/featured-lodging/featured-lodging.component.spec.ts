import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { FeaturedLodgingComponent } from './featured-lodging.component';
import { Lodging } from 'src/app/data/lodging.model';
import { Rental } from 'src/app/data/rental.model';
import { TentPlot} from 'src/app/data/tent.model';
import { RVPlot} from 'src/app/data/rv.model';
import { plotSize} from 'src/app/data/plotSize.model';
import { Amenities} from 'src/app/data/amenities.model';
describe('FeaturedLodgingComponent', () => {
  let component: FeaturedLodgingComponent;
  let fixture: ComponentFixture<FeaturedLodgingComponent>;

  const testLodgings: Lodging[] = [
    {
      id: '',
      location: {
        id: '',
        address: {
          id: '',
          city: '',
          postalCode: '',
          country: '',
          stateProvince: '',
          street: '',
        },
        latitude: '',
        longitude: '',
      },
      name: '',
      bathrooms: 1,
      rentals: [
        {
          id: '1',
          lotNumber: '1',
          properties: {
          size: {
            width: 5,
            height: 5,
          },
          amenities : undefined,
          capacity: 2,
          name : "tent"
      },
      status: 'available',
      price: 100,
        },
      ],
      reviews: [],
    },
  ];

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [FeaturedLodgingComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedLodgingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update on change', () => {
    component.featuredLodgings = testLodgings;
    fixture.detectChanges();
    expect(component.displayLodgings).toBeTruthy();
    expect(component.displayLodgings.length).toBeLessThanOrEqual(6);
  });

  it('should not update', () => {
    component.featuredLodgings = null;
    fixture.detectChanges();
    expect(component.displayLodgings.length).toEqual(0);
  });
});
