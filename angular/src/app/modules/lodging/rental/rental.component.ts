import { Component, OnInit } from '@angular/core';
import { LodgingService } from 'src/app/services/lodging/lodging.service';
import { Lodging } from 'src/app/data/lodging.model';
import { HttpErrorResponse } from '@angular/common/http';
import { Rental } from 'src/app/data/rental.model';

@Component({
  selector: 'uic-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.scss'],
})
export class RentalComponent implements OnInit {
  lodgings: Lodging[] | null = null;
  rentals: Rental[] | null = null;
  familyRoomCount: number = 0;
  tripleRoomCount: number = 0;
  doubleRoomCount: number = 0;

  constructor(private lodgingService: LodgingService) {}

  ngOnInit(): void {
    this.loadLodgings();
  }

  private loadLodgings(): void {
    this.lodgingService
      .get()
      .toPromise()
      .then((data) => (this.lodgings = data))
      .then(() => this.SetRentals())
      .catch((error) => this.handleError(error));
  }
  public SetRentals(): void {
    this.rentals = this.lodgings[0].rentals;
    this.CountAvailableRooms();
  }

  private CountAvailableRooms(): void {
    this.rentals.forEach(element => {
      if(element.rentalUnit.name === "Family Room" && element.availability === true)
      {
        this.familyRoomCount++;
      }
      else if(element.rentalUnit.name === "Triple Room" && element.availability === true)
      {
        this.tripleRoomCount++;
      }
      else if(element.rentalUnit.name === "Double Room" && element.availability === true)
      {
        this.doubleRoomCount++;
      }
      else
      {
        // do nothing
      }
    });
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
