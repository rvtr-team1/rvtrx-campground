import { typeGuard } from './account.typeguard';
const Payload = {
  id: '100',
  address: {
    id: '100',
    city: 'Dallas',
    country: 'USA',
    postalCode: '75200',
    stateProvince: 'TX',
    street: '1 Reunion Tower',
  },
  payments: [
    {
      id: '100',
      cardName: 'Amex',
      cardNumber: '****1234',
      cardExpirationDate: '2020-12-31',
    },
    {
      id: '200',
      cardName: 'Amex',
      cardNumber: '****9876',
      cardExpirationDate: '2020-12-31',
    },
  ],
  profiles: [
    {
      id: '100',
      email: 'campero@demo.com',
      name: {
        id: '100',
        family: 'demo',
        given: 'campero',
      },
      phone: '800-123-9876',
    },
    {
      id: '200',
      email: 'campera@demo.com',
      name: {
        id: '200',
        family: 'demo',
        given: 'campera',
      },
      phone: '800-123-9876',
    },
  ],
};
describe('TypeGuard', () => {
  const tg = typeGuard;
  it('Should return false', () => {
    const result = tg({});
    expect(result).toBeFalse();
  });
  it('Should return True', () => {
    const result = tg(Payload);
    expect(result).toBeTruthy();
  });
});
