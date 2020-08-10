import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewaddressformComponent } from './newaddressform.component';

describe('NewaddressformComponent', () => {
  let component: NewaddressformComponent;
  let fixture: ComponentFixture<NewaddressformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewaddressformComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewaddressformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
