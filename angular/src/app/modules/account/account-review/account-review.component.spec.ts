import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AccountReviewComponent } from './account-review.component';

describe('AccountReviewComponent', () => {
  const review = {
    id: '',
    accountId: '',
    hotelId: '',
    comment: '',
    dateCreated: '2020-08-01',
    rating: 0,
  };
  let component: AccountReviewComponent;
  let fixture: ComponentFixture<AccountReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AccountReviewComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountReviewComponent);
    component = fixture.componentInstance;
    component.review = review;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
