import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { IconComponent } from './icon/icon.component';
import { MenuListComponent } from './menu/menu-list/menu-list.component';
import { ContactComponent } from './menu/contact/contact.component';
import { EmptyComponent } from './empty/empty.component';
import { ImageLoaderComponent } from './image-loader/image-loader.component';
import { TopComponent } from './top/top.component';
import { LayoutModule } from '../common/layout/layout.module';
import { MessageAreaModule } from './message-area/message-area.module';
import { AvatarModule } from './avatar/avatar.module';
import { PagerModule } from './pager/pager.module';
import { StoreModule } from '@ngrx/store';
import { LoadingModule } from './loading/loading.module';

const COMPONENTLIST = [
  IconComponent, // EmptyComponent 需要IconComponent
  EmptyComponent, // 无法形成模块导入
  MenuComponent,
  ImageLoaderComponent,
  TopComponent
];

const MODULELIST = [
  AvatarModule,
  MessageAreaModule,
  PagerModule,
  LoadingModule
]

@NgModule({
  declarations: [
    MenuComponent,
    EmptyComponent,
    IconComponent,
    MenuListComponent,
    ContactComponent,
    ImageLoaderComponent,
    TopComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    LayoutModule,
    ...MODULELIST,
    StoreModule
  ],
  exports: [
    ...COMPONENTLIST,
    ...MODULELIST
  ]
})
export class ComponentModule { }
