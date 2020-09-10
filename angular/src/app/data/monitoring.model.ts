import { Injectable } from '@angular/core';
import * as Sentry from '@sentry/angular';

@Injectable()
export class Monitoring {
  sentry = {
    captureException: Sentry.captureException,
    init: Sentry.init,
  };
}
