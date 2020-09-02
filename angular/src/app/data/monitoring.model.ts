import { Injectable } from '@angular/core';
import * as Sentry from '@sentry/browser';

@Injectable()
export class Monitoring {
  sentry = {
    captureException: Sentry.captureException,
    init: Sentry.init,
  };
}
