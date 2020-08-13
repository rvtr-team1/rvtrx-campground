/**
 * Represents the _Profile_ model
 *
 * ```yaml
 * id: string;
 * email: string;
 * givenName: string;
 * familyName: string;
 * phone: string;
 * ```
 */
export interface Profile {
  /** unique identifier */
  id: string;
  /** email */
  email: string;
  /** profile type: adult/child */
  type: string;
  /** firstname */
  givenName: string;
  /** lastname */
  familyName: string;
  /** phone number */
  phone: string;
}
