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
  /** name of the site */
  name: string;
  /** maximum number of people allowed */
  occupancy: number;
  /** type of site */
  type: string;
  /** booking status: available/booked/occupied */
  status: string;
  /** normal nightly cost */
  price: number;
  /** discounted cost, if applicable */
  discountedPrice?: number;
}
