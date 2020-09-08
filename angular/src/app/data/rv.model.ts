import { RentalProperties } from './rentalProperties.model';
import { plotSize } from './plotSize.model';
import { Amenities } from './amenities.model';

export class RV implements RentalProperties {
    size: plotSize;
    amenities: Amenities;
    maximumCapacity: number;
    name:string;
    constructor(S:plotSize,A:Amenities)
    {
        this.size = S;
        this.amenities = A;
        this.maximumCapacity = 5;
        this.name = "RV";
    }
    

}