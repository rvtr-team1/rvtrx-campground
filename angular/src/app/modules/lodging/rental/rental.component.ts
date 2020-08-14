/**
 * importing the necessary modules, services and models.
 */
import { Component, OnInit, Input } from '@angular/core';
import { LodgingService } from '../../../services/lodging/lodging.service';
import { Lodging } from '../../../data/lodging.model';
import { ActivatedRoute } from '@angular/router';
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
export class RentalComponent implements OnInit {
  /**
   * lodging taken from the lodging-details component
   */
  @Input() lodging: Lodging;
  /**
   * fields of the component
   * rentals: array of Rentals
   * availabilityCount: maps number of available rentals to rental type
   */
  rentals: Rental[] = [];
  availabilityCount = new Map<string, number>();
  idString: string | null;

  /**
   * @param lodgingService
   * Constructor injects lodgingService
   */
  constructor(
    private readonly lodgingService: LodgingService,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.setRentals(this.lodging);
  }

  /**
   * populates rentals array and keeps track of the availability of each rental
   */
  public setRentals(lodging: Lodging): void {
    // loop through the lodging's rentals
    // check to see if a rental has the same type as one that's already in the rentals array
    // only keep track of the rental types that are unique
    // increment the availability count for each rental in rentals if they are available
    lodging.rentals.forEach((rental) => {
      if (!this.rentals.find((item) => item.type === rental.type)) {
        this.availabilityCount.set(rental.type, 0);
        this.rentals.push(rental);
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
