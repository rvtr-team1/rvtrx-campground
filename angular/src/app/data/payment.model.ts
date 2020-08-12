/**
 * Represents the _Payment_ model
 *
 * ```yaml
 * id: string;
 * cardExpirationDate: Date;
 * cardName: string;
 * cardNumber: string;
 * ```
 */
export interface Payment {
  id: string;
  cardExpirationDate: string;
  cardName: string;
  cardNumber: string;
  // securityCode: number;
}
