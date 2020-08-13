import { Profile } from './profile.model';
import { Rental } from './rental.model';

/**
 * Represents the _Booking_ model
 *
 * ```yaml
 * id: string;
 * accountId: string;
 * lodgingId: string;
 * guests: Profile[];
 * rentals: Rental[];
 * checkIn: string;
 * checkOut: string;
 * ```
 */
export interface Booking {
  id: string;
  accountId: string;
  lodgingId: string;
  guests: Profile[];
  rentals: Rental[];
  checkIn: string;
  checkOut: string;
}
