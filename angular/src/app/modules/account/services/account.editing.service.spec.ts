import { TestBed } from '@angular/core/testing';
import { scan } from 'rxjs/operators';
import { AccountEditingService } from './account.editing.service';

describe('AccountEditingService', () => {
  let service: AccountEditingService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [AccountEditingService] });
    service = TestBed.inject(AccountEditingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
