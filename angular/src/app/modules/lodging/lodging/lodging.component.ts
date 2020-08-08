import { Component, OnInit } from '@angular/core';
import { LodgingService } from 'src/app/services/lodging/lodging.service';
import { Lodging } from 'src/app/data/lodging.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'uic-lodging-home',
  templateUrl: './lodging.component.html',
  styleUrls: ['./lodging.component.scss'],
})
export class LodgingComponent implements OnInit {
  /**
   * fields usied in this component
   */
  lodgings: Lodging[] | null = null;

  /**
   * represents lodging-home component's constructor
   * @param lodgingService the lodging service
   */
  constructor(private lodgingService: LodgingService) {}

  /**
   * gets all the lodges available with the help of
   * get() in lodging service component
   */
  ngOnInit(): void {
    this.lodgingService.get().subscribe(
      (data) => (this.lodgings = data),
      (error) => this.handleError(error)
    );
  }

  /**
   * handles errors occured into execution of
   * any functions if this function is called
   *
   * @param error error message
   */
  handleError(error: HttpErrorResponse): void {
    console.log(error.status);
    let message: string;
    if (error.status === 0) {
      message = 'Unable to connect to server';
    } else {
      message = error.status.toString();
    }
  }
}
