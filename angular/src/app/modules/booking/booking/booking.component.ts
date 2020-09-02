import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Lodging } from 'src/app/data/lodging.model';
import { LodgingService } from 'src/app/services/lodging/lodging.service';

@Component({
  selector: 'uic-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent {
  lodgings$: Observable<Lodging[]>;
  searchResults: Lodging[] = [];
  searchQuery!: string;
  isSearched = false;

  constructor(lodgingService: LodgingService) {
    this.lodgings$ = lodgingService.get();
  }
}
