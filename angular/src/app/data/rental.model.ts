import { Unit } from './unit.model';

/**
 * Represents the _Rental_ model
 *
 * ```yaml
 * id: string;
 * name: string;
 * type: Unit;
 * ```
 */
export interface Rental {
  id: string;
  name: string;
  unit: Unit;
}
