import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NewPaymentFormComponent } from './new-payment-form.component';
import { FormControl } from '@angular/forms';
import { Payment } from 'src/app/data/payment.model';

describe('NewpaymentformComponent', () => {
  let component: NewPaymentFormComponent;
  let fixture: ComponentFixture<NewPaymentFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewPaymentFormComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPaymentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not show modal on init', () => {
    component.ngOnInit();
    expect(component.showModal).toBeFalsy();
  });

  it('should properly validate input', () => {
    const newform = new NewPaymentFormComponent();
    newform.newPayment.subscribe((e: Payment) => {
      expect(e as Payment).toBeTrue();
    });
    const controls = [
      {
        control: 'CCNumber',
        InitialValue: '1234',
        ProperValue: '1234-1234-2134-1234',
      },
      {
        control: 'ExpDate',
        InitialValue: '1111',
        ProperValue: '08/24',
      },
      {
        control: 'SecurityNumber',
        InitialValue: '1111',
        ProperValue: '111',
      },
    ];
    controls.forEach((el) => {
      const field = newform.PaymentForm.controls[el.control];
      field.setValue(el.InitialValue);
      expect(field.valid).toBeFalse();
      field.setValue(el.ProperValue);
      expect(field.valid).toBeTruthy();
    });
    component.onSubmit();
  });
  it('should return form controls from getters', () => {
    const getters = [component.CCNumber, component.ExpDate, component.SecurityNumber];
    for (const g of getters) {
      expect(g instanceof FormControl).toBeTruthy();
    }
  });
});
