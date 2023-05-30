import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { MessageComponent } from './message/message.component';
import { ProjectComponent } from './project/project.component';
import { RouterModule } from '@angular/router';
import { HomeModule } from './home/home.module';
import { ArticleModule } from './article/article.module';
import { ArticleDetailModule } from './article/article-detail/article-detail.module';
import { AuthModule } from './auth/auth.module';

const VIEWSLIST = [AboutComponent, MessageComponent, ProjectComponent]

@NgModule({
  declarations: [
    ...VIEWSLIST,
  ],
  imports: [
    CommonModule,
    HomeModule,
    ArticleModule,
    ArticleDetailModule,
    AuthModule,
    RouterModule
  ],
  exports: [
    ...VIEWSLIST
  ]
})
export class ViewsModule { }
