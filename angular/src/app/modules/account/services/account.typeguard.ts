import { Account } from '../../../data/account.model';

export const TypeGuard = (el: any): el is Account => {
  if (
    el.hasOwnProperty('payments') &&
    Array.isArray(el.profiles) &&
    Array.isArray(el.payments) &&
    typeof el.id === 'string' &&
    CheckAddress(el.address) &&
    el.profiles.every(CheckProfile) &&
    el.payments.every(CheckPayment)
  ) {
    return true;
  } else {
    return false;
  }
};

export function CheckAddress(x: any): boolean {
  if (
    typeof x.id === 'string' &&
    typeof x.city === 'string' &&
    typeof x.country === 'string' &&
    typeof x.postalCode === 'string' &&
    typeof x.stateProvince === 'string' &&
    typeof x.street === 'string'
  ) {
    return true;
  } else {
    return false;
  }
}
export function CheckProfile(x: any): boolean {
  if (
    typeof x.id === 'string' &&
    typeof x.email === 'string' &&
    CheckName(x.name) === true &&
    typeof x.phone === 'string'
  ) {
    return true;
  } else {
    return false;
  }
}
export function CheckPayment(x: any): boolean {
  if (
    typeof x.id === 'string' &&
    typeof x.cardExpirationDate === 'string' &&
    typeof x.cardName === 'string' &&
    typeof x.cardNumber === 'string'
  ) {
    return true;
  } else {
    return false;
  }
}
export function CheckName(x: any): boolean {
  if (typeof x.id === 'string' && typeof x.family === 'string' && typeof x.given === 'string') {
    return true;
  } else {
    return false;
  }
}
