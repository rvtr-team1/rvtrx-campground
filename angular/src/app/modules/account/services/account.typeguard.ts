import { Account } from '../../../data/account.model';

export const typeGuard = (el: any): el is Account => {
  if (
    el.hasOwnProperty('payments') &&
    Array.isArray(el.profiles) &&
    Array.isArray(el.payments) &&
    typeof el.id === 'string' &&
    checkAddress(el.address) &&
    el.profiles.every(checkProfile) &&
    el.payments.every(checkPayment)
  ) {
    return true;
  } else {
    return false;
  }
};

export function checkAddress(x: any): boolean {
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
export function checkProfile(x: any): boolean {
  if (
    typeof x.id === 'string' &&
    typeof x.email === 'string' &&
    checkName(x.name) === true &&
    typeof x.phone === 'string'
  ) {
    return true;
  } else {
    return false;
  }
}
export function checkPayment(x: any): boolean {
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
export function checkName(x: any): boolean {
  if (typeof x.id === 'string' && typeof x.family === 'string' && typeof x.given === 'string') {
    return true;
  } else {
    return false;
  }
}
