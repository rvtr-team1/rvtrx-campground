import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddressComponent } from './address.component';
import { GenericEditingService } from '../../../services/editable/generic-editing.service';
import { InjectionToken } from '@angular/core';

describe('AddressComponent', () => {
  const address = {
    id: '',
    city: '',
    country: '',
    postalCode: '',
    stateProvince: '',
    street: '',
  };
  const ACCOUNT_EDITING_SERVICE = new InjectionToken<GenericEditingService<Partial<Account>>>(
    'AccountEditingService'
  );
  let component: AddressComponent;
  let fixture: ComponentFixture<AddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddressComponent],
      providers: [{ provide: ACCOUNT_EDITING_SERVICE, useValue: undefined }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressComponent);
    component = fixture.componentInstance;
    component.address = address;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
