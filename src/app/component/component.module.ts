import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from './avatar/avatar.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { IconComponent } from './icon/icon.component';
import { MenuListComponent } from './menu/menu-list/menu-list.component';
import { ContactComponent } from './menu/contact/contact.component';
import { EmptyComponent } from './empty/empty.component';
import { LoadingComponent } from './loading/loading.component';
import { ImageLoaderComponent } from './image-loader/image-loader.component';

const COMPONENTLIST = [AvatarComponent, MenuComponent, EmptyComponent, LoadingComponent, ImageLoaderComponent, IconComponent];

@NgModule({
  declarations: [
    AvatarComponent,
    MenuComponent,
    IconComponent,
    MenuListComponent,
    ContactComponent,
    EmptyComponent,
    LoadingComponent,
    ImageLoaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ...COMPONENTLIST
  ]
})
export class ComponentModule { }
