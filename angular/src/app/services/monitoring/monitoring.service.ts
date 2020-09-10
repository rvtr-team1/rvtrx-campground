import { ErrorHandler, Injectable } from '@angular/core';
import * as Sentry from '@sentry/angular';

@Injectable({
  providedIn: 'root',
})
export class MonitoringService implements ErrorHandler {
  handleError(error: unknown): void {
    const errorHandler = Sentry.createErrorHandler({
      logErrors: true,
      showDialog: false,
    });

    errorHandler.handleError(error);
  }

  // tslint:disable-next-line:no-any
  sendToError(error: any): void {
    this.router.navigate(['/error']);
  }
}
