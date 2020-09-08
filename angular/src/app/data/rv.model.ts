import { RentalProperties } from './rentalProperties.model';
import { plotSize } from './plotSize.model';
import { Amenities } from './amenities.model';

export class RVPlot implements RentalProperties {
    size: plotSize;
    amenities: Amenities;
    capacity: number;
    name:string;
    constructor(S:plotSize,A:Amenities)
    {
        this.size = S;
        this.amenities = A;
        this.capacity = 5;
        this.name = "RVPlot";
    }
    

}