import { Component, OnInit } from '@angular/core';
import { Lodging } from '../../../data/lodging.model';
import { ActivatedRoute } from '@angular/router';
import { LodgingService } from '../../../services/lodging/lodging.service';

@Component({
  selector: 'uic-lodging',
  templateUrl: './lodging-details.component.html',
})
export class LodgingDetailsComponent implements OnInit {
  /**
   * fields used in this component
   */
  lodging: Lodging | null = null;
  idString: string | null = null;
  isLoaded = false;

  /**
   * provide activated route to get route parameters and lodging service to get lodging
   * @param route route gives access to URL where the component will be displayed
   * @param lodgingService service that requests lodging information
   */
  constructor(private route: ActivatedRoute, private lodgingService: LodgingService) {}

  /**
   * On init, get the lodging for which the details will be displayed
   */
  ngOnInit(): void {
    this.getLodgingById();
  }

  /**
   * get lodging by id based on the route /lodging/details/{id}
   */
  getLodgingById(): void {
    this.route.paramMap.subscribe((params) => {
      this.idString = params.get('id');
    });
    console.log(this.idString);
    if (this.idString !== null) {
      this.lodgingService.get(this.idString).subscribe((data) => {
        if (this.idString !== null) {
          this.lodging = data[parseInt(this.idString, 10) - 1];
          this.isLoaded = true;
        }
      });
    }
  }
}
