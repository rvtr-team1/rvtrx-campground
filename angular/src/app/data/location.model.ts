import { Address } from './address.model';

/**
 * Represents the _Location_ model
 *
 * id: string;
 * address: Address;
 * latitude: string;
 * longitude: string;
 */
export interface Location {
  id: string;
  /** address of the campground */
  address: Address;
  /** latitude for pinning on a map */
  latitude: string;
  /** longitude for pinning on a map */
  longitude: string;
}
