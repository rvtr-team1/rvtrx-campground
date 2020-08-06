import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LodgingHomeComponent } from './lodging-home.component';

describe('LodgingHomeComponent', () => {
  let component: LodgingHomeComponent;
  let fixture: ComponentFixture<LodgingHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LodgingHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LodgingHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
