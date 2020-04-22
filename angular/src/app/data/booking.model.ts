import { Profile } from './profile.model';
import { Rental } from './rental.model';
import { Sojourn } from './sojourn.model';

/**
 * Represents the _Booking_ model
 *
 * ```yaml
 * id: string;
 * accountId: string;
 * lodgingId: string;
 * guests: Profile[];
 * rentals: Rental[];
 * sojourn: Sojourn;
 * status: Status;
 * ```
 */
export interface Booking {
  id: string;
  accountId: string;
  lodgingId: string;
  guests: Profile[];
  rentals: Rental[];
  sojourn: Sojourn;
  status: string;
}
