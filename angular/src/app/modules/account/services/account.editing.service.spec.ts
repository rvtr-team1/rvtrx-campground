import { TestBed } from '@angular/core/testing';
import { Subject } from 'rxjs';
import { skip } from 'rxjs/operators';
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

  it('should create a subject of type Account', () => {
    expect(service.Subject instanceof Subject).toBeTruthy();
  });
});
