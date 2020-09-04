import { RentalProperties } from './rentalProperties.model';
import { plotSize } from './plotSize.model';
import { Amenities } from './amenities.model';

export class Tent implements RentalProperties {
    size: plotSize;
    amenities: Amenities;
    constructor(Size:plotSize)
    {
        this.size = Size;
    }

}