import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PaymentComponent } from './payment.component';

describe('PaymentComponent', () => {
  const payments = {
    cardName: '',
    cardNumber: '',
    cardExpirationDate: '2020-08-01',
    id: '',
    securityCode: '',
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
    component.payment = payments;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
