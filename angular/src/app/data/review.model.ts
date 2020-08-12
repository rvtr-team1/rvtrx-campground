/**
 * Represents the _Review_ model
 *
 * ```yaml
 * id: string;
 * accountId: string;
 * hotelId: string;
 * comment: string;
 * dateCreated: Date;
 * rating: number;
 * ```
 */
export interface Review {
  id: string;
  comment: string;
  dateCreated: string;
  rating: number;
}
