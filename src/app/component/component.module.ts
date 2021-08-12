import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { IconComponent } from './icon/icon.component';
import { MenuListComponent } from './menu/menu-list/menu-list.component';
import { ContactComponent } from './menu/contact/contact.component';
import { EmptyComponent } from './empty/empty.component';
import { ImageLoaderComponent } from './image-loader/image-loader.component';
import { TopComponent } from './top/top.component';
import { LayoutModule } from '../common/layout/layout.module';
import { PagerComponent } from './pager/pager.component';
import { MessageAreaModule } from './message-area/message-area.module';
import { LoadingModule } from './loading/loading.module';
import { AvatarModule } from './avatar/avatar.module';

const COMPONENTLIST = [MenuComponent, EmptyComponent, ImageLoaderComponent, IconComponent, TopComponent, PagerComponent, MessageAreaModule, AvatarModule, LoadingModule,];

@NgModule({
  declarations: [
    MenuComponent,
    IconComponent,
    MenuListComponent,
    ContactComponent,
    EmptyComponent,
    ImageLoaderComponent,
    TopComponent,
    PagerComponent,
  ],
  imports: [
    CommonModule,
    LayoutModule,
    AvatarModule,
    MessageAreaModule,
    LoadingModule,
    RouterModule,
  ],
  exports: [
    ...COMPONENTLIST
  ]
})
export class ComponentModule { }
