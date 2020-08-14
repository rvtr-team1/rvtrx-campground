/**
 * importing the necessary modules, services and models.
 */
import { Component, OnInit } from '@angular/core';
import { LodgingService } from '../../../services/lodging/lodging.service';
import { Lodging } from '../../../data/lodging.model';
import { Rental } from 'src/app/data/rental.model';

/**
 * Rental component metadata
 */
@Component({
  selector: 'uic-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.scss'],
})

/**
 * This class represents the Rental component
 */
export class RentalComponent implements OnInit {
  /**
   * fields of the component
   * rentalUnits: array of RentalUnits
   * availabilityCount: maps number of available rentals to rentalUnit.id
   */
  rentals: Rental[] = [];
  availabilityCount = new Map<string, number>();

  /**
   * @param lodgingService
   * Constructor injects lodgingService
   */
  constructor(private readonly lodgingService: LodgingService) {}

  ngOnInit(): void {
    this.loadLodgings();
  }

  /**
   * uses a lodgingService to make a http get request to get
   * lodging information then sends the lodgings to setRentalUnits method
   */
  private loadLodgings(): void {
    this.lodgingService.get().subscribe((lodgings) => {
      this.setRentalUnits(lodgings);
    });
  }

  /**
   * populates rentalUnits array and keeps track of the availability of each rental
   */
  public setRentalUnits(lodgings: Lodging[]): void {
    // get one lodging (hardcoded for now) from the lodging array
    // loop through its rentals
    // check to see if a rental has duplicate rental units
    // only keep track of the rental units that are unique
    // increment the availability count for each rental unit if the rentals are available
    lodgings[0].rentals.forEach((rental) => {
      if (!this.rentals.find((item) => item.type === rental.type)) {
        this.availabilityCount.set(rental.type, 0);
        this.rentals.push(rental);
        if(rental.status === 'available'){
          this.availabilityCount.set(rental.type, 1);
        }
      }
      // The rental unit already exists in the array so just check availability and add it to the count
      else {
        if (rental.status === 'available') {
          const count = this.availabilityCount.get(rental.type);
          if (count) {
            this.availabilityCount.set(rental.type, count + 1);
          }
        }
      }
    });
  }
}
