import { ErrorHandler, Injectable } from '@angular/core';
import * as Sentry from '@sentry/browser';

Sentry.init({
  dsn: 'https://d74d2ee8985243de97c679b5e4884524@o388320.ingest.sentry.io/5227204',
});

@Injectable({
  providedIn: 'root',
})
export class MonitorService implements ErrorHandler {
  handleError(error: any): void {
    const eventId = Sentry.captureException(error.originalError || error);

    Sentry.showReportDialog({ eventId });
  }
}
