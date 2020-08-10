import { Account } from '../../../data/account.model';
import { Address } from '../../../data/address.model';
import { Profile } from 'src/app/data/profile.model';
import { Name } from 'src/app/data/name.model';
import { Payment } from '../../../data/payment.model';
const TypeGuard = (el: Account): el is Account => {
  if (
    Array.isArray(el.profiles) &&
    Array.isArray(el.payments) &&
    typeof el.id === 'string' &&
    el.address &&
    CheckAddress(el.address) &&
    AllAreTrue(el.profiles, CheckProfile) &&
    AllAreTrue(el.payments, CheckPayment)
  ) {
    return true;
  }
  return false;
};
function AllAreTrue(x: Array<any>, CheckFunction: (p: any) => boolean) {
  const _ = [...new Set(x.map((p: any) => CheckFunction(p))).values()];
  if (_.length === 1 && _[0] === true) {
    return true;
  }
  return false;
}
function CheckAddress(x: Address): boolean {
  if (
    typeof x.id === 'string' &&
    typeof x.city === 'string' &&
    typeof x.country === 'string' &&
    typeof x.postalCode === 'string' &&
    typeof x.stateProvince === 'string' &&
    typeof x.street === 'string'
  ) {
    return true;
  }
  return false;
}
function CheckProfile(x: Profile): boolean {
  if (
    typeof x.id === 'string' &&
    typeof x.email === 'string' &&
    CheckName(x.name) === true &&
    typeof x.phone === 'string'
  ) {
    return true;
  }
  return false;
}
function CheckPayment(x: Payment): boolean {
  if (
    typeof x.id === 'string' &&
    typeof x.cardExpirationDate === 'string' &&
    typeof x.cardName === 'string' &&
    typeof x.cardNumber === 'string'
  ) {
    return true;
  }
  return false;
}
function CheckName(x: Name): boolean {
  if (typeof x.id === 'string' && typeof x.family === 'string' && typeof x.given === 'string') {
    return true;
  }
  return false;
}
export default TypeGuard;
