/**
 * importing the necessary modules, services and models.
 */
import { Component, OnInit } from '@angular/core';
import { LodgingService } from '../../../services/lodging/lodging.service';
import { Lodging } from '../../..//data/lodging.model';
import { Rental } from '../../../data/rental.model';
import { RentalUnit } from 'src/app/data/rental-unit.model';

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
   */
  lodgings: Lodging[] | null = null;
  rentals: Rental[] | null = null;
  rentalUnits: RentalUnit[] = [];
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
   * lodging information. It then sets the rentals variable to
   * the lodgings Rental property.
   */
  private loadLodgings(): void {
    this.lodgingService.get().subscribe((data) => {
      this.lodgings = data;
      this.setRentalUnits(this.lodgings);
    });
  }

  /**
   * populates rentalUnits array and keeps track of the availability of each rental
   */
  public setRentalUnits(lodgings: Lodging[]): void {
    if (lodgings) {
      this.rentals = lodgings[0].rentals; // hardcoded for now, taking the first lodging from the test data
      // loop through rentals
      // check to see if a rental has duplicate rental units
      // only keep track of the rental units that are unique
      // increment the availability count if the rentals are available
      this.rentals.forEach((rental) => {
        if (!this.rentalUnits.find((rentalUnit) => rentalUnit.id === rental.rentalUnit.id)) {
          this.availabilityCount.set(rental.rentalUnit.id, 1);
          this.rentalUnits.push(rental.rentalUnit);
        }
        // The rental already exists so just check availability and add it to the count
        else {
          if (rental.status === 'available') {
            const count = this.availabilityCount.get(rental.rentalUnit.id);
            if (count) {
              this.availabilityCount.set(rental.rentalUnit.id, count + 1);
            }
          }
        }
      });
    }
  }
}
