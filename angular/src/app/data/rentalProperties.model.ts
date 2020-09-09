import { PlotSize } from './plotSize.model';
import { Amenities } from './amenities.model';

export interface RentalProperties {
  size: PlotSize;
  amenities?: Amenities;
  capacity: number;
  name: string;
}
