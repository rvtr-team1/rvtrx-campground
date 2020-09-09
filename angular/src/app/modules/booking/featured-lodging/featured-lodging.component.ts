import { Component, Input, OnChanges } from '@angular/core';
import { Lodging } from 'src/app/data/lodging.model';
import { ImagesService } from 'src/app/services/images/images.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'uic-featured-lodging',
  templateUrl: './featured-lodging.component.html',
  styleUrls: ['./featured-lodging.component.scss'],
})
export class FeaturedLodgingComponent implements OnChanges {
  @Input() featuredLodgings!: Lodging[] | null;
  displayLodgings: Lodging[] = [];
  image$: Observable<string>

  constructor(private img: ImagesService) {
    this.image$ = this.img.getImageUrl()
   }

  ngOnChanges(): void {
    if (this.featuredLodgings) {
      this.displayLodgings = this.featuredLodgings.slice(0, 6);
    }
  }
}
