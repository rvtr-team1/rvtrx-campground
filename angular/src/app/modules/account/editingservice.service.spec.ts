import { TestBed } from '@angular/core/testing';

import { EditingService } from './editingservice.service';

describe('EditingserviceService', () => {
  let service: EditingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
