/**
 * Represents the _Rental_ model
 *
 * ```yaml
 * id: string;
 * name: string;
 * status: string;
 * price: number;
 * discountedPrice: number;
 * ```
 * status: Rental occupation/checkin/checkout status
 * price: Normal nightly cost for the rental
 * discountedPrice: If there is a discount for this rental,
 * the discounted price will show instead of the normal price
 */
export interface Rental {
  id: string;
  name: string;
  occupancy: number;
  type: string;
  status: string;
  price: number;
  discountedPrice?: number;
}
