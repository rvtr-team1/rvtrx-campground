import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewpaymentformComponent } from './newpaymentform.component';

describe('NewpaymentformComponent', () => {
  let component: NewpaymentformComponent;
  let fixture: ComponentFixture<NewpaymentformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewpaymentformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewpaymentformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
