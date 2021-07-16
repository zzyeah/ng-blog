import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from './avatar/avatar.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';

const COMPONENTLIST = [AvatarComponent, MenuComponent];

@NgModule({
  declarations: [
    AvatarComponent,
    MenuComponent
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
