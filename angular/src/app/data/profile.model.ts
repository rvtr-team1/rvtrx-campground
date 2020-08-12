import { Name } from './name.model';

/**
 * Represents the _Profile_ model
 *
 * ```yaml
 * id: string;
 * email: string;
 * name: Name;
 * phone: string;
 * ```
 */
export interface Profile {
  id: string;
  email: string;
  type: string;
  // name: Name;
  givenName: string;
  familyName: string;
  phone: string;
}
