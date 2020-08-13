/**
 * Represents the _Rental_ model
 *
 * ```yaml
 * id: string;
 * name: string;
 * occupancy: number;
 * type: string;
 * status: string;
 * price: number;
 * discountedPrice?: number;
 * ```
 */
export interface Rental {
  id: string;
  name: string;
  /** maximum number of people allowed */
  occupancy: number;
  /** type of site */
  type: string;
  /** booking status, one of: 
   *  - available (neither booked nor currently in use)
   *  - booked (booked by someone else, but not in use)
   *  - occupied (currently in use)
   */
  status: string;
  /** normal nightly cost */
  price: number;
  /** discounted cost, if applicable */
  discountedPrice?: number;
}
