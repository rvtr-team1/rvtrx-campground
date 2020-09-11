/**
 * Represents the _Image_ model
 *
 * ```yaml
 * id: string;
 * name: string;
 * url: string;
 * width: number;
 * height: number;
 * ```
 */

export interface Image {
  id: string;
  /** name of the image */
  name: string;
  /** url of the image stored in the azure blob storage */
  url: string;
  /** width of the image */
  width: number;
  /** height of the image */
  height: number;
}
