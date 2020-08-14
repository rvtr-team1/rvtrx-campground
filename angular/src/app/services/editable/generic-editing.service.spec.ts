import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GenericEditingService } from './generic-editing.service';
import { Account } from '../../data/account.model';
describe('ProfileComponent', () => {
  const service = new GenericEditingService<Partial<Account>>();
  const account: Account = {
    id: '',
    address: {
      id: '',
      city: '',
      country: '',
      postalCode: '',
      stateProvince: '',
      street: '',
    },
    payments: [],
    profiles: [],
  };
  const partial = { id: '4' };
  fit('Should Initialize with the first object sent to it', () => {
    service.editUpdates.subscribe((e) => {
      expect(e).toBeTruthy();
    });
    service.update(account);
  });
  fit('Should update the field of key from a partial', () => {
    service.editUpdates.subscribe((e) => {
      if (e) {
        expect(e).toBeTrue();
        expect(e.id).toEqual('4');
      }
    });
    service.update(partial);
  });
  fit('Should emit a payload', () => {
    service.payloadEmitter.subscribe((e) => {
      expect(e).toBeTruthy();
    });
    service.update(partial);
  });
});
