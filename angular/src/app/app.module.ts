import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from './layout/layout.module';
import { MonitoringService } from './services/monitoring/monitoring.service';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [AppRoutingModule, BrowserModule, LayoutModule],
  providers: [{ provide: ErrorHandler, useClass: MonitoringService }],
})
export class AppModule {}
