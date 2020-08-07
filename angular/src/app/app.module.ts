import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Monitoring } from './data/monitoring.model';
import { LayoutModule } from './layout/layout.module';
import { MonitoringService } from './services/monitoring/monitoring.service';
import { environment } from '../environments/environment';
import { LodgingHomeComponent } from './modules/lodging/lodging-home/lodging-home.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [AppRoutingModule, BrowserModule, LayoutModule],
  providers: [
    Monitoring,
    {
      provide: ErrorHandler,
      useClass: environment.production ? MonitoringService : ErrorHandler,
    },
  ],
})
export class AppModule {}
