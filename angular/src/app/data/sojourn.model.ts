/**
 * Represents the _Sojourn_ model
 *
 * ```yaml
 * id: string
 * checkIn: Date
 * checkout: Date
 * dateCreated: Date
 * dateModified: Date
 * ```
 */
export interface Sojourn {
  id: string;
  checkIn: Date;
  checkOut: Date;
  dateCreated: Date;
  dateModified: Date;
}
