/**
 * Represents the _Stay_ model
 *
 * ```yaml
 * id: string
 * checkIn: Date
 * checkout: Date
 * dateCreated: Date
 * dateModified: Date
 * ```
 */
export interface Stay {
  id: string;
  checkIn: string;
  checkOut: string;
  dateCreated: string;
  dateModified: string;
}
