import { RentalProperties } from './rentalProperties.model';
import { plotSize } from './plotSize.model';
import { Amenities } from './amenities.model';

export class TentPlot implements RentalProperties {
    size: plotSize;
    amenities: null;
    capacity: number;
    name:string;
    constructor(Size:plotSize)
    {
        this.size = Size;
        this.capacity = 4;
        this.name = "TentPlot";
    }
    

}