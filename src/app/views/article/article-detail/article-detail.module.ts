import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogDetailComponent } from '../component/blog-detail/blog-detail.component';
import { FormsModule } from '@angular/forms';
import { ArticleDetailComponent } from './article-detail.component';
import { LayoutModule } from 'src/app/common/layout/layout.module';



@NgModule({
  declarations: [
    ArticleDetailComponent,
    BlogDetailComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    LayoutModule
  ],
  exports: [
    ArticleDetailComponent
  ]
})
export class ArticleDetailModule { }
