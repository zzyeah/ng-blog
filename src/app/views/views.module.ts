import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { ArticleComponent } from './article/article.component';
import { HomeComponent } from './home/home.component';
import { MessageComponent } from './message/message.component';
import { ProjectComponent } from './project/project.component';

const VIEWSLIST = [AboutComponent, ArticleComponent, HomeComponent, MessageComponent, ProjectComponent]

@NgModule({
  declarations: [
    ...VIEWSLIST
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...VIEWSLIST
  ]
})
export class ViewsModule { }
