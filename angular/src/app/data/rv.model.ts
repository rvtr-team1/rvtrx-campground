import { RentalProperties } from './rentalProperties.model';
import { PlotSize } from './plotSize.model';
import { Amenities } from './amenities.model';

export class RVPlot implements RentalProperties {
  size: PlotSize;
  amenities?: Amenities;
  capacity: number;
  name: string;
  constructor(S: PlotSize, A: Amenities) {
    this.size = S;
    this.amenities = A;
    this.capacity = 5;
    this.name = 'RVPlot';
  }
}
