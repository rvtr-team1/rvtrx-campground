import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddressComponent } from './address.component';
import { ACCOUNT_EDITING_SERVICE } from '../account-editing.token';
import { Component, NO_ERRORS_SCHEMA, Input } from '@angular/core';

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

  @Component({ selector: 'uic-editable', template: '' })
  class EditableStubComponent {
    @Input('data')
    data: string;
    @Input('editMode')
    editMode = false;
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddressComponent, EditableStubComponent],
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
