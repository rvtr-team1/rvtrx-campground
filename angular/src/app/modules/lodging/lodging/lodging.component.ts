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
  idString: string | null = null;
  isLoaded: boolean = false;
  errorMessage: string;

  constructor(private route: ActivatedRoute, private lodgingService: LodgingService) {}

  ngOnInit(): void {
    this.getLodgingById();
  }

  getLodgingById(): void {
    // const idString = this.route.snapshot.paramMap.get('id');
    this.route.paramMap.subscribe((params) => {
      this.idString = params.get('id');
    });
    console.log(this.idString);
    if (this.idString) {
      this.lodgingService
        .get(this.idString)
        .toPromise()
        .then((data) => {
          this.lodging = data[0];
          this.isLoaded = true;
        })
        .catch((error) => this.handleError(error));
    }
  }

  public handleError(error: HttpErrorResponse): void {
    console.log(error.status);
    if (error.status === 0) {
      this.errorMessage = 'Unable to connect to server';
    } else {
      this.errorMessage = error.status.toString();
    }
  }
}
