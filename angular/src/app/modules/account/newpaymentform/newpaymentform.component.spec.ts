import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NewPaymentFormComponent } from './newpaymentform.component';

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
    const controls = [
      {
        control: 'CCNumber',
        InitialValue: '1234123421341234',
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
      expect(field.valid).toBeFalsy();
      field.setValue(el.ProperValue);
      expect(field.valid).toBeTruthy();
    });
  });
});
