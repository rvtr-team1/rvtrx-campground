import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddressComponent } from './address.component';
import { GenericEditingService } from '../../../services/editable/generic-editing.service';
import { InjectionToken } from '@angular/core';
import { ACCOUNT_EDITING_SERVICE } from '../account-editing.token';
import { EditableComponent } from '../editable/editable.component';

describe('AddressComponent', () => {
  const address = {
    id: '',
    city: '',
    country: '',
    postalCode: '',
    stateProvince: '',
    street: '',
  };
  let component: AddressComponent;
  let fixture: ComponentFixture<AddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddressComponent, EditableComponent],
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
