import { ErrorHandler, Injectable } from '@angular/core';
import * as Sentry from '@sentry/browser';

@Injectable({
  providedIn: 'root',
})
export class MonitorService implements ErrorHandler {
  sentryErrorHandler = Sentry;

  constructor() {
    this.sentryErrorHandler.init({
      dsn: 'https://d74d2ee8985243de97c679b5e4884524@o388320.ingest.sentry.io/5227204',
    });
  }

  handleError(error: any): void {
    const eventId = this.sentryErrorHandler.captureException(error.originalError || error);

    this.sentryErrorHandler.showReportDialog({ eventId });
  }
}
