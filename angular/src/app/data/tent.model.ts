import { RentalProperties } from './rentalProperties.model';
import { plotSize } from './plotSize.model';
import { Amenities } from './amenities.model';

export class TentPLot implements RentalProperties {
    constructor(Size:plotSize)
    {
        this.size = Size;
        this.maximumCapacity = 4;
        this.name = "TentPLot";
    }
    

}