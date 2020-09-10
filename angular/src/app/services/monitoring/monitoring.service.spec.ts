import { HttpClientTestingModule } from '@angular/common/http/testing';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { MonitoringService } from './monitoring.service';

describe('MonitorService', () => {
  let service: MonitoringService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(MonitoringService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should handle error', fakeAsync(() => {
    expect(() => {
      service.handleError(null);
    }).not.toThrow();

    tick();
    expect(logSpy).toHaveBeenCalled();
    expect(routerSpy).toHaveBeenCalled();
  }));
});
