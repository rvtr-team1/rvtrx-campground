import { TestBed } from '@angular/core/testing';
import { MonitorService } from './monitor.service';

describe('MonitorService', () => {
  let service: MonitorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonitorService);
    service.sentryErrorHandler.init();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should handle error', () => {
    expect(service.handleError).toThrow();
    expect(() => {
      service.handleError(new Error('handleError tested'));
    }).not.toThrow();
  });
});
