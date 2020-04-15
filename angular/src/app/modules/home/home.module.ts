import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
