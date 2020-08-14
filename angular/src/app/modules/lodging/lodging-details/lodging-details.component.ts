import { Component, OnInit } from '@angular/core';
import { Lodging } from '../../../data/lodging.model';
import { ActivatedRoute } from '@angular/router';
import { LodgingService } from '../../../services/lodging/lodging.service';

@Component({
  selector: 'uic-lodging-details',
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
  constructor(
    private readonly route: ActivatedRoute,
    private readonly lodgingService: LodgingService
  ) {}

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
    if (this.idString) {
      // gets the lodgings array then gets the correct lodging based on the id
      // this works because the test data is in order
      // when the api is ready, there would be a call to get the lodging by id instead
      this.lodgingService.getById(this.idString).subscribe((data) => {
        this.lodging = data;
        this.isLoaded = true;
      });
    }
  }
}
