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
  /** text body */
  comment: string;
  /** date the review was posted */
  dateCreated: string;
  /** rating out of ten stars */
  rating: number;
}
