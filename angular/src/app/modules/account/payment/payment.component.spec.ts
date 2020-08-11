import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PaymentComponent } from './payment.component';

describe('PaymentComponent', () => {
  const payment = {
    cardName: '',
    cardNumber: '',
    cardExpirationDate: '2020-08-01',
    id: '',
  };
  let component: PaymentComponent;
  let fixture: ComponentFixture<PaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentComponent);
    component = fixture.componentInstance;
    component.payment = payment;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
