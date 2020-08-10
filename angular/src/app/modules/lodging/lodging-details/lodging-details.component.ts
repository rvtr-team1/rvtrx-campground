import { Component, OnInit } from '@angular/core';
import { Lodging } from '../../../data/lodging.model';
import { ActivatedRoute } from '@angular/router';
import { LodgingService } from '../../../services/lodging/lodging.service';

@Component({
  selector: 'uic-lodging',
  templateUrl: './lodging-details.component.html',
})
export class LodgingDetailsComponent implements OnInit {
  lodging: Lodging | null = null;
  idString: string | null = null;
  isLoaded = false;
  constructor(private route: ActivatedRoute, private lodgingService: LodgingService) {}
  ngOnInit(): void {
    this.getLodgingById();
  }
  getLodgingById(): void {
    this.route.paramMap.subscribe((params) => {
      this.idString = params.get('id');
    });
    console.log(this.idString);
    if (this.idString){
      this.lodgingService.getById(this.idString).toPromise()
      .then(data => this.lodging = data);
      this.isLoaded = true;
    }
  }
}