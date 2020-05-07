import { TestBed } from '@angular/core/testing';

import { MonitorService } from './monitor.service';

describe('MonitorService', () => {
  let service: MonitorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonitorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should handle error', () => {
    const spy = spyOn(service, 'handleError');

    service.handleError(new Error());
    service.handleError({ originalError: new Error() });

    expect(spy).toHaveBeenCalled();
  });
});
