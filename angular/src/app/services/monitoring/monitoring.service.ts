import { ErrorHandler, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ConfigService } from '../config/config.service';
import { Monitoring } from '../../data/monitoring.model';
import { environment } from '../../../environments/environment';

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
      this.monitoring.sentry.init({
        dsn: dsn,
        environment: environment.name,
      });
      this.monitoring.sentry.captureException(error.originalError || error);
    });
  }
}
