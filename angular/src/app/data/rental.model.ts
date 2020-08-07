import { RentalUnit } from './rental-unit.model';

/**
 * Represents the _Rental_ model
 *
 * ```yaml
 * id: string;
 * name: string;
 * status: string;
 * price: number;
 * discountedPrice?: number;
 * rentalUnit: RentalUnit;
 * availability:boolean
 * ```
 */
export interface Rental {
  id: string;
  name: string;
  status: string;
  price: number;
  discountedPrice?: number;
  rentalUnit: RentalUnit;
}
