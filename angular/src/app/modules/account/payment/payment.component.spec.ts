import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PaymentComponent } from './payment.component';
import { AccountEditingService } from '../services/account.editing.service';
import { Subject } from 'rxjs';
describe('PaymentComponent', () => {
  const payments = [
    {
      cardName: '',
      cardNumber: '',
      cardExpirationDate: '',
      id: '',
    },
  ];
  let component: PaymentComponent;
  let fixture: ComponentFixture<PaymentComponent>;
  const AccountEditingServiceStub = {
    PayloadEmitter: new Subject(),
    register: () => {},
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentComponent],
      providers: [{ provide: AccountEditingService, useValue: AccountEditingServiceStub }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentComponent);
    component = fixture.componentInstance;
    component.payments = payments;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
