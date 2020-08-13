import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddressComponent } from './address.component';
import { AccountEditingService } from '../services/account.editing.service';
import { Subject } from 'rxjs';
import { By } from '@angular/platform-browser';
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
  const AccountEditingServiceStub = {
    PayloadEmitter: new Subject(),
    register: () => {},
  };
  let component: AddressComponent;
  let fixture: ComponentFixture<AddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddressComponent],
      providers: [{ provide: AccountEditingService, useValue: AccountEditingServiceStub }],
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

  it('#clicked() should toggle #editMode', () => {
    const el = fixture.debugElement.componentInstance;
    expect(el.editMode).toBe(false, 'off at first');
    fixture.debugElement.query(By.css('i')).nativeElement.click();
    fixture.detectChanges();
    expect(el.editMode).toBe(true, 'on after click');
  });
});
