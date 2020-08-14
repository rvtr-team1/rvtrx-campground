import { Account } from './account.model';

type Partial<T> = {
  [P in keyof T]?: T[P];
};

/**
 * This is the type used in the generic editable service.
 * It ensures all updates passed are of type EditedAccount via unions
 * To add on to updated fields, add an interface and expand the union
 */
export type EditedAccount = Partial<Account>;
