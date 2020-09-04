import { RentalProperties } from './rentalProperties.model';
import { plotSize } from './plotSize.model';
import { Amenities } from './amenities.model';

export class RV implements RentalProperties {
    size: plotSize;
    amenities: Amenities;
    constructor(S:plotSize,A:Amenities)
    {
        this.size = S;
        this.amenities = A;
    }

}