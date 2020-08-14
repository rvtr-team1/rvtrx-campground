import { Component, Input, OnInit } from '@angular/core';
import { Review } from '../../../data/review.model';

@Component({
  selector: 'uic-account-review',
  templateUrl: './account-review.component.html',
})
export class AccountReviewComponent {
  @Input() review: Review;
}
