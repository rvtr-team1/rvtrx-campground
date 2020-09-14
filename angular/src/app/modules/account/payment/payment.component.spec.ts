import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { PaymentComponent } from './payment.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Observable, of } from 'rxjs';
import { PostPayment } from '../../../data/payment.model';
import { AccountService } from '../../../services/account/account.service';

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
  const mockCard: PostPayment = {
    accountId: 'string',
    id: 'string',
    cardExpirationDate: '2020-08-01',
    cardName: 'string',
    cardNumber: 'string',
    securityCode: '111',
  };
  const accountServiceStub = {
    postPayment(card: PostPayment): Observable<PostPayment> {
      return of(card);
    },
  };
  let component: PaymentComponent;
  let fixture: ComponentFixture<PaymentComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [{ provide: AccountService, useValue: accountServiceStub }],
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

  it('should add new card', () => {
    component.addCard(mockCard);
    expect(component.payments.length).toEqual(2);
  });
});
