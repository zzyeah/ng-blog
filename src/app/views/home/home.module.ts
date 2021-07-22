import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselItemComponent } from './carousel-item/carousel-item.component';
import { ComponentModule } from '../../component/component.module';
import { LoadingComponent } from 'src/app/component/loading/loading.component';



@NgModule({
  declarations: [
    CarouselItemComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    ComponentModule
  ]
})
export class HomeModule { }
