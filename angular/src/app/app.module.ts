import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OKTA_CONFIG, OktaAuthModule } from '@okta/okta-angular';
import * as Sentry from '@sentry/angular';
import { environment } from 'environment';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from './layout/layout.module';
import { ErrorComponent } from './modules/error/error.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent, ErrorComponent],
  imports: [AppRoutingModule, BrowserModule, LayoutModule, OktaAuthModule],
  providers: [
    {
      provide: ErrorHandler,
      useValue: Sentry.createErrorHandler({
        logErrors: true,
        showDialog: false,
      }),
      // useClass: environment.production ? MonitoringService : ErrorHandler,
    },
    {
      provide: OKTA_CONFIG,
      useValue: environment.identity,
    },
  ],
})
export class AppModule {}
