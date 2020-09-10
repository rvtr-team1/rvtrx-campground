import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import * as Sentry from '@sentry/angular';
import { environment } from 'environment';
import { AppModule } from './app/app.module';

Sentry.init({
  dsn: environment.monitoring,
  environment: environment.name,
  release: environment.release,
});

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
