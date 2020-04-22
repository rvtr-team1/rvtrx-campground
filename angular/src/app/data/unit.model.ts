import { Bathroom } from './bathroom.model';
import { Bedroom } from './bedroom.model';

export interface Unit {
  id: string;
  bathrooms: Bathroom[];
  bedrooms: Bedroom[];
  name: string;
  occupancy: number;
  type: string;
}
