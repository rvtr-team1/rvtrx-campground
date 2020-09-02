import * as Sentry from '@sentry/browser';
import { Injectable } from "@angular/core";

@Injectable()
export class Monitoring {
  sentry = {
    captureException: Sentry.captureException,
    init: Sentry.init,
  };
}
