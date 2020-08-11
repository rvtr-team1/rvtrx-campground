import { Component, OnInit, Input } from '@angular/core';
import { Lodging } from 'src/app/data/lodging.model';

@Component({
  selector: 'uic-spotlight',
  templateUrl: './spotlight.component.html',
  styleUrls: ['./spotlight.component.scss'],
})
export class SpotlightComponent implements OnInit {
  @Input() lodgings: Lodging[] | null;

  selectedLodging: Lodging;

  constructor() {}

  ngOnInit(): void {}

  setSpotlight(lodgings: Lodging[] | null): void {
    let temp = 0;
    if (lodgings) {
      for (let i = 0; i < lodgings.length; i++) {
        if (lodgings[i].rentals.length > temp) {
          temp = lodgings[i].rentals.length;
          this.selectedLodging = lodgings[i];
        }
      }
    }
  }
}
