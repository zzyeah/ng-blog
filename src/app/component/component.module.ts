import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from './avatar/avatar.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { IconComponent } from './icon/icon.component';

const COMPONENTLIST = [AvatarComponent, MenuComponent];

@NgModule({
  declarations: [
    AvatarComponent,
    MenuComponent,
    IconComponent
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
