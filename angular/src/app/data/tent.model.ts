import { RentalProperties } from './rentalProperties.model';
import { plotSize } from './plotSize.model';
import { Amenities } from './amenities.model';

export class TentPlot implements RentalProperties {
    size: plotSize;
    amenities: Amenities;
    maximumCapacity: number;
    name:string;
    constructor(Size:plotSize)
    {
        this.size = Size;
        this.maximumCapacity = 4;
        this.name = "TentPlot";
    }
    

}