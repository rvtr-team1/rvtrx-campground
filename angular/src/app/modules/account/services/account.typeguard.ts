import { Account } from '../../../../data/account.model';
const TypeGuard = (el: Account): el is Account => Array.isArray(el.profiles);

export default TypeGuard;
