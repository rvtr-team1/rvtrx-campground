import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LodgingService } from 'src/app/services/lodging/lodging.service';
import { Lodging } from 'src/app/data/lodging.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'uic-lodging',
  templateUrl: './lodging.component.html',
})
export class LodgingComponent implements OnInit {

  lodging: Lodging | null = null;

  constructor(
    private route: ActivatedRoute,
    private lodgingService: LodgingService
  ) {}

  ngOnInit(): void {
    this.getLodgingById();
  }

  getLodgingById(): void
  {
    const idString = this.route.snapshot.paramMap.get('id');
    this.lodgingService.get(idString).toPromise()
    .then(data => this.lodging = data[0])
    .catch(error => this.handleError(error));
  }

  private handleError(error: HttpErrorResponse): void {
    console.log(error.status);
    let message: string;
    if (error.status === 0) {
      message = 'Unable to connect to server';
    } else {
      message = error.status.toString();
    }
  }

}
