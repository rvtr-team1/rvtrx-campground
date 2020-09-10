import { PlotSize } from './plotSize.model';
import { RVAmenities } from './rvAmenities.model';

export interface RentalProperties {
  size: PlotSize;
  amenities?: RVAmenities;
  capacity: number;
  name: string;
}
