import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddressComponent } from './address.component';
import { Observable, of } from 'rxjs';
import { Address } from 'src/app/data/address.model';

describe('AddressComponent', () => {
  let address$ = of({
    id: '',
    city: '',
    country: '',
    postalCode: '',
    stateProvince: '',
    street: '',
  });
  let component: AddressComponent;
  let fixture: ComponentFixture<AddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddressComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressComponent);
    component = fixture.componentInstance;
    component.address$ = address$;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
