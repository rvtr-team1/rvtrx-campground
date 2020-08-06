import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedLodgingComponent } from './featured-lodging.component';

describe('FeaturedLodgingComponent', () => {
  let component: FeaturedLodgingComponent;
  let fixture: ComponentFixture<FeaturedLodgingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FeaturedLodgingComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedLodgingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
