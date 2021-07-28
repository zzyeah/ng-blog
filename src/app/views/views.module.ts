import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { MessageComponent } from './message/message.component';
import { ProjectComponent } from './project/project.component';
import { ComponentModule } from '../component/component.module';
import { RouterModule } from '@angular/router';
import { HomeModule } from './home/home.module';
import { ArticleModule } from './article/article.module';

const VIEWSLIST = [AboutComponent,  MessageComponent, ProjectComponent]

@NgModule({
  declarations: [
    ...VIEWSLIST,
  ],
  imports: [
    CommonModule,
    ComponentModule,
    HomeModule,
    ArticleModule,
    RouterModule
  ],
  exports: [
    ...VIEWSLIST
  ]
})
export class ViewsModule { }
