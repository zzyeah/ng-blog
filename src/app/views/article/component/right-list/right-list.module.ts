import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RightListComponent } from './right-list.component';
import { LoadingDirectiveModule } from 'app/directive/loading/loading.module';



@NgModule({
  declarations: [
    RightListComponent
  ],
  exports: [
    RightListComponent
  ],
  imports: [
    CommonModule,
    LoadingDirectiveModule
  ]
})
export class RightListModule { }
