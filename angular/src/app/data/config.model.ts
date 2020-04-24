import { Link } from './link.model';

/**
 * Represents the _Config_ model
 *
 * ```yaml
 * api: object;
 * menu: object;
 * ```
 */
export interface Config {
  api: {
    account: string;
    booking: string;
    lodging: string;
  };
  menu: {
    header: Link[];
  };
}
