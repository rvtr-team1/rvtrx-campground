import { Bathroom } from './bathroom.model';
import { Bedroom } from './bedroom.model';

/**
 * Represents the _Unit_ model
 *
 * ```yaml
 * id: string;
 * bathrooms: Bathroom[];
 * bedrooms: Bedroom[];
 * name: string;
 * occupancy: number;
 * type: string;
 * ```
 */
export interface Unit {
  id: string;
  bathrooms: Bathroom[];
  bedrooms: Bedroom[];
  name: string;
  occupancy: number;
  type: string;
}
