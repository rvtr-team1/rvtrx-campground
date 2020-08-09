import { Component, OnInit } from '@angular/core';
import { LodgingService } from 'src/app/services/lodging/lodging.service';
//import {LodgingService} from '../services/lodging/lodging.service';
import { Lodging } from 'src/app/data/lodging.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'uic-lodging-home',
  templateUrl: './lodging-home.component.html',
  styleUrls: ['./lodging-home.component.scss'],
})
export class LodgingHomeComponent implements OnInit {
  /**
   * fields used in this component
   */
  lodgings: Lodging[] | null = null;

  /**
   * represents lodging-home component's constructor
   * @param lodgingService the lodging service
   */
  constructor(private readonly lodgingService: LodgingService) {}

  /**
   * gets all the lodging available with the help of
   * get() in lodging service component
   */
  ngOnInit(): void {
    this.lodgingService.get().subscribe(
      (data) => (this.lodgings = data),
      (error) => this.handleError(error)
    );
  }

  /**
   * handles errors that occur due to unsuccessful Http responses
   *
   * @param error error message
   */
  handleError(error: HttpErrorResponse): void {
    //let message: string
    let message:string = error.status.toString();
    if (error.status === 0) {

      message = 'Unable to connect to server';
    }
    // else {
    //   message = error.status.toString();
    // }
  }
}
