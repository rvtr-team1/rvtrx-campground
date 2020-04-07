import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutModule } from './layout/layout.module';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [AppRoutingModule, BrowserModule, LayoutModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
