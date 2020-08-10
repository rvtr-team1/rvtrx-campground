import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewpaymentformComponent } from './newpaymentform.component';
import { FormControl } from '@angular/forms';
import { componentFactoryName } from '@angular/compiler';

describe('NewpaymentformComponent', () => {
  let component: NewpaymentformComponent;
  let fixture: ComponentFixture<NewpaymentformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewpaymentformComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewpaymentformComponent);
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

  it('should emit reply action on submit'),
    () => {
      const newform = new NewpaymentformComponent();
      newform.PaymentForm.setValue({
        Bank: 'Amex',
        CCNumber: '123456781234',
        ExpDate: '12/20',
        SecurityNumber: '111',
      });

      newform.onSubmit();
      expect(component.Bank).toEqual(new FormControl('Amex'));
      expect(component.CCNumber).toEqual(new FormControl('123456781234'));
      expect(component.ExpDate).toEqual(new FormControl('12/20'));
      expect(component.SecurityNumber).toEqual(new FormControl('111'));
    };
});
