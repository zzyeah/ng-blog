import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselItemComponent } from './carousel-item/carousel-item.component';
import { ComponentModule } from '../../component/component.module';
import { LoadingComponent } from 'src/app/component/loading/loading.component';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    HomeComponent,
    CarouselItemComponent,
  ],
  imports: [
    CommonModule,
    ComponentModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
  ],
  exports: [
    HomeComponent,
  ]
})
export class HomeModule { }
