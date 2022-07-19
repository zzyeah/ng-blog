import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageAreaComponent } from './message-area.component';
import { DataFormComponent } from './data-form/data-form.component';
import { DataListComponent } from './data-list/data-list.component';
import { LoadingComponent } from '../loading/loading.component';
import { LoadingModule } from '../loading/loading.module';
import { FormsModule } from '@angular/forms';
import { AvatarModule } from '../avatar/avatar.module';

@NgModule({
  declarations: [
    MessageAreaComponent,
    DataFormComponent,
    DataListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AvatarModule,
    LoadingModule,
    AvatarModule,
  ],
  exports: [
    MessageAreaComponent
  ]
})
export class MessageAreaModule { }
