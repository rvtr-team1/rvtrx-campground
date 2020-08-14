/**
 * importing the necessary modules, services and models.
 */
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Rental } from '../../../data/rental.model';

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
export class RentalComponent implements OnInit, OnChanges {
  /**
   * rentals taken from the lodging-details lodging.rentals
   */
  @Input() rentals: Rental[];
  /**
   * represents the set of rentals with unique types
   */
  rentalTypes: Rental[] = [];
  /**
   * maps the number of available rentals to the rental type
   */
  availabilityCount = new Map<string, number>();

  /**
   * @param lodgingService
   * Constructor injects lodgingService
   */
  constructor() {}

  ngOnInit(): void {
    this.setRentalTypes(this.rentals);
  }
  ngOnChanges(): void {
    this.setRentalTypes(this.rentals);
  }

  /**
   * populates rentals array and keeps track of the availability of each rental
   */
  public setRentalTypes(rentals: Rental[]): void {
    // loop through the lodging's rentals
    // check to see if a rental has the same type as one that's already in the rentalTypes
    // only keep track of the rental types that are unique
    // increment the availability count for each rental in rentals if they are available
    rentals.forEach((rental) => {
      if (!this.rentalTypes.find((item) => item.type === rental.type)) {
        this.availabilityCount.set(rental.type, 0);
        this.rentalTypes.push(rental);
        if (rental.status === 'available') {
          this.availabilityCount.set(rental.type, 1);
        }
      }
      // The rental type already exists in the array so just check availability and add it to the count
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
