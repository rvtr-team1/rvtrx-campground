import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { PaymentComponent } from './payment.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PostPayment } from 'src/app/data/payment.model';

describe('PaymentComponent', () => {
  const payments = [
    {
      cardName: '',
      cardNumber: '',
      cardExpirationDate: '2020-08-01',
      id: '',
      securityCode: '',
    },
  ];
  let component: PaymentComponent;
  let fixture: ComponentFixture<PaymentComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        declarations: [PaymentComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentComponent);
    component = fixture.componentInstance;
    component.payments = payments;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add card', () => {
    const mockPayment = {
      accountId: 'string',
      id: 'string',
      cardExpirationDate: '2020-08-01',
      cardName: 'string',
      cardNumber: 'string',
      securityCode: '111',
    } as PostPayment;

    component.addCard(mockPayment);

    expect(component.payments[1]).toEqual(mockPayment);
  });
});
