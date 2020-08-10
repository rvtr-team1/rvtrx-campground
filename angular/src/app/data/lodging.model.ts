import { Location } from './location.model';
import { Review } from './review.model';
import { Rental } from './rental.model';
<<<<<<< HEAD
import {Bathroom} from './bathroom.model';
=======
>>>>>>> master

/**
 * Represents the _Lodging_ model
 *
 * ```yaml
 * id: string;
 * location: Location;
 * name: string;
 * bathrooms: number;
 * rentals: Rental[];
 * reviews: Review[];
 * ```
 */
export interface Lodging {
  id: string;
  location: Location;
  name: string;
  bathrooms: number;
  rentals: Rental[];
  reviews: Review[];
}
