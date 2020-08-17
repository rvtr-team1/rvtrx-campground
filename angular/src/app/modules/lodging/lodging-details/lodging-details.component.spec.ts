import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LodgingDetailsComponent } from './lodging-details.component';
import { RentalComponent } from '../rental/rental.component';

describe('LodgingComponent', () => {
  let component: LodgingDetailsComponent;
  let fixture: ComponentFixture<LodgingDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LodgingDetailsComponent,
        RentalComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LodgingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
