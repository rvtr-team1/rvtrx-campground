import { ErrorHandler, Injectable } from '@angular/core';
import { ConfigService } from '../config/config.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Monitoring } from 'src/app/data/monitoring.model';

@Injectable({
  providedIn: 'root',
})
export class MonitoringService implements ErrorHandler {
  private readonly apiUrl$: Observable<string>;

  constructor(private readonly config: ConfigService, private readonly monitoring: Monitoring) {
    this.apiUrl$ = config.get().pipe(map((cfg) => cfg.api.monitoring));
  }

  handleError(error: any): void {
    this.apiUrl$.subscribe((dsn) => {
      this.monitoring.sentry.init({ dsn });
      this.monitoring.sentry.captureException(error.originalError || error);
    });
  }
}
