import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OKTA_CONFIG, OktaAuthModule } from '@okta/okta-angular';
import { environment } from 'environment';
import { MonitoringService } from 'services/monitoring/monitoring.service';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Monitoring } from './data/monitoring.model';
import { LayoutModule } from './layout/layout.module';
import { ErrorComponent } from './modules/error/error.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent, ErrorComponent],
  imports: [AppRoutingModule, BrowserModule, LayoutModule, OktaAuthModule],
  providers: [
    Monitoring,
    {
      provide: ErrorHandler,
      useClass: environment.production ? MonitoringService : ErrorHandler,
    },
    {
      provide: OKTA_CONFIG,
      useValue: environment.identity,
    },
  ],
})
export class AppModule {}
