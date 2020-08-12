import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FormControl, FormsModule } from '@angular/forms';
import { NewAddressformComponent } from './new-address-form.component';
import { Address } from '../../../data/address.model';
describe('NewaddressformComponent', () => {
  let component: NewAddressformComponent;
  let fixture: ComponentFixture<NewAddressformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewAddressformComponent],
      imports: [FormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAddressformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return form controls from getters', () => {
    const getters = [
      component.City,
      component.Country,
      component.PostalCode,
      component.StateProvince,
      component.Street,
    ];
    for (const g of getters) {
      expect(g instanceof FormControl).toBeTruthy();
    }
  });

  it('it should display the modal on button click', () => {
    fixture = TestBed.createComponent(NewAddressformComponent);
    fixture.whenStable().then(() => {
      const button = fixture.debugElement.query(By.css('button'));
      fixture.detectChanges();
      button.nativeElement.click();
      expect(fixture.componentInstance.showModal).toBeTrue();
    });
  });
  type address = {
    city: 'city';
    country: 'this.AddressForm.value.Country';
    postalCode: 'this.AddressForm.value.PostalCode';
    stateProvince: 'this.AddressForm.value.stateProvince';
    street: 'this.AddressForm.value.Street';
    id: '';
  };
  it('It should emit a payload on submit', () => {
    const newform = new NewAddressformComponent();
    newform.newAddress.subscribe((e: Address) => {
      expect(e as address).toBeTrue();
    });
    const controls = [
      {
        control: 'City',
        InitialValue: '1234',
        ProperValue: 'Some Where',
      },
      {
        control: 'Country',
        InitialValue: '1111',
        ProperValue: 'US',
      },
      {
        control: 'PostalCode',
        InitialValue: 1,
        ProperValue: 11111,
      },
      {
        control: 'StateProvince',
        InitialValue: '432',
        ProperValue: 'TX',
      },
      {
        control: 'Street',
        InitialValue: '1111',
        ProperValue: '111 word word',
      },
    ];
    controls.forEach((el) => {
      const field = newform.AddressForm.controls[el.control];
      field.setValue(el.InitialValue);
      fixture.detectChanges();
      expect(field.valid).toBeFalse();
      field.setValue(el.ProperValue);
      fixture.detectChanges();
      expect(field.valid).toBeTruthy(el.InitialValue + el.control);
    });
    component.onSubmit();
  });
});
