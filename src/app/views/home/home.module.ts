import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselItemComponent } from './carousel-item/carousel-item.component';
import { ComponentModule } from '../../component/component.module';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoadingDirectiveModule } from 'app/directive/loading/loading.module';

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
    LoadingDirectiveModule
  ],
  exports: [
    HomeComponent,
  ]
})
export class HomeModule { }
