import { RentalProperties } from './rentalProperties.model';
import { PlotSize } from './plotSize.model';
import { Amenities } from './amenities.model';

export class TentPlot implements RentalProperties {
  size: PlotSize;
  amenities?: Amenities;
  capacity: number;
  name: string;
  constructor(Size: PlotSize) {
    this.size = Size;
    this.capacity = 4;
    this.name = 'TentPlot';
  }
}
