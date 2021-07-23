import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { ArticleComponent } from './article/article.component';
import { HomeComponent } from './home/home.component';
import { MessageComponent } from './message/message.component';
import { ProjectComponent } from './project/project.component';
import { ComponentModule } from '../component/component.module';
import { RouterModule } from '@angular/router';
import { HomeModule } from './home/home.module';

const VIEWSLIST = [AboutComponent, ArticleComponent, MessageComponent, ProjectComponent]

@NgModule({
  declarations: [
    ...VIEWSLIST
  ],
  imports: [
    CommonModule,
    ComponentModule,
    HomeModule,
    RouterModule
  ],
  exports: [
    ...VIEWSLIST
  ]
})
export class ViewsModule { }
