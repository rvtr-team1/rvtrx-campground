import { RentalUnit } from './rental-unit.model';

/**
 * Represents the _Rental_ model
 *
 * ```yaml
 * id: string;
 * name: string;
 * rentalUnit: RentalUnit;
 * status: string;
 * price: number;
 * discountedPrice: number;
 * ```
 */
export interface Rental {
  id: string;
  name: string;
  rentalUnit: RentalUnit;
  status: string;
  price: number;
  discountedPrice?: number;
}
