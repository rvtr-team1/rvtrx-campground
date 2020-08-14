/**
 * Represents the _Review_ model
 *
 * ```yaml
 * id: string;
 * comment: string;
 * dateCreated: string;
 * rating: number;
 * ```
 */
export interface Review {
  id: string;
  /** text body */
  comment: string;
  /** date the review was posted */
  dateCreated: string;
  /** integer rating out of ten stars */
  rating: number;
}
