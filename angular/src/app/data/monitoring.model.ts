import * as Sentry from '@sentry/browser';

export class Monitoring {
  sentry = {
    captureException: Sentry.captureException,
    init: Sentry.init,
  };
}
