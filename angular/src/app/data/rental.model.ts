import { RentalUnit } from './rental-unit.model';

/**
 * Represents the _Rental_ model
 *
 * ```yaml
 * id: string;
 * name: string;
 * rentalUnit: RentalUnit;
 * availability:string
 * ```
 */
export interface Rental {
  id: string;
  name: string;
  rentalUnit: RentalUnit;
  availability: boolean;
}
