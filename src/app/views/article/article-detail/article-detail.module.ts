import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogDetailComponent } from '../component/blog-detail/blog-detail.component';
import { FormsModule } from '@angular/forms';
import { ArticleDetailComponent } from './article-detail.component';
import { LayoutModule } from 'src/app/common/layout/layout.module';
import { BlogTOCComponent } from '../component/blog-toc/blog-toc.component';
import { ComponentModule } from 'src/app/component/component.module';
import { BlogCommentComponent } from '../component/blog-comment/blog-comment.component';
import { LoadingDirectiveModule } from 'src/app/directive/loading/loading.module';
import { RightListModule } from '../component/right-list/right-list.module';
import { PipeModule } from 'src/app/pipe/pipe.module';



@NgModule({
  declarations: [
    ArticleDetailComponent,
    BlogDetailComponent,
    BlogTOCComponent,
    BlogCommentComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    PipeModule,
    ComponentModule,
    LayoutModule,
    LoadingDirectiveModule,
    RightListModule
  ],
  exports: [
    ArticleDetailComponent
  ]
})
export class ArticleDetailModule { }
