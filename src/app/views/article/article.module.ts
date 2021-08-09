import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleListComponent } from './component/article-list/article-list.component';
import { ArticleCategoryComponent } from './component/article-category/article-category.component';
import { ArticleComponent } from './article.component';
import { ComponentModule } from 'src/app/component/component.module';
import { LayoutModule } from 'src/app/common/layout/layout.module';
import { RouterModule } from '@angular/router';
import { RightListComponent } from './component/right-list/right-list.component';


@NgModule({
  declarations: [
    ArticleListComponent,
    ArticleCategoryComponent,
    ArticleComponent,
    RightListComponent,
  ],
  imports: [
    CommonModule,
    LayoutModule,
    ComponentModule,
    RouterModule
  ],
  exports: [
    ArticleComponent
  ]
})
export class ArticleModule { }
