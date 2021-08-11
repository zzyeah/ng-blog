import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogDetailComponent } from '../component/blog-detail/blog-detail.component';
import { FormsModule } from '@angular/forms';
import { ArticleDetailComponent } from './article-detail.component';
import { LayoutModule } from 'src/app/common/layout/layout.module';
import { BlogTOCComponent } from '../component/blog-toc/blog-toc.component';
import { ComponentModule } from 'src/app/component/component.module';
import { BlogCommentComponent } from '../component/blog-comment/blog-comment.component';



@NgModule({
  declarations: [
    ArticleDetailComponent,
    BlogDetailComponent,
    BlogTOCComponent,
    BlogCommentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ComponentModule,
    LayoutModule
  ],
  exports: [
    ArticleDetailComponent
  ]
})
export class ArticleDetailModule { }
