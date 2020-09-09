import { ErrorHandler, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ConfigService } from '../config/config.service';
import { Monitoring } from '../../data/monitoring.model';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class MonitoringService implements ErrorHandler {
  private readonly apiUrl$: Observable<string>;

  constructor(
    config: ConfigService,
    private readonly monitoring: Monitoring,
    private readonly router: Router
  ) {
    this.apiUrl$ = config.get().pipe(map((cfg) => cfg.api.monitoring));
  }

  handleError(error: unknown): void {
    console.log('monitoring');
    this.apiUrl$.subscribe((dsn) => {
      this.monitoring.sentry.init({
        dsn,
        environment: environment.name,
        release: environment.release,
      });

      this.monitoring.sentry.captureException(error);
    });
  }

  // tslint:disable-next-line:no-any
  sendToError(error: any): void {
    this.router.navigate(['/error']);
  }
}
