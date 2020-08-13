import { AccountService } from 'src/app/services/account/account.service';
import { Account } from '../../../data/account.model';
import { Profile } from '../../../data/profile.model';
import { Address } from '../../../data/address.model';

type AddressUpdate = {
  address: Address;
};
type ProfileUpdate = {
  profiles: Profile[];
};

export type IAccount = Account | ProfileUpdate | AddressUpdate;
