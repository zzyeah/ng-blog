import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleListComponent } from './component/article-list/article-list.component';
import { ArticleCategoryComponent } from './component/article-category/article-category.component';
import { ArticleComponent } from './article.component';
import { ComponentModule } from '../../component/component.module';
import { LayoutModule } from '../../common/layout/layout.module';
import { RouterModule } from '@angular/router';
import { ArticleDetailModule } from './article-detail/article-detail.module';
import { LoadingDirectiveModule } from 'app/directive/loading/loading.module';
import { RightListModule } from './component/right-list/right-list.module';
import { ArticleCategoryModule } from './component/article-category/article-category.module';
import { LazyImgModule } from 'app/directive/lazy-img/lazy-img.module';
import { ArticleRoutingModule } from './article-routing.module';

@NgModule({
  declarations: [
    ArticleListComponent,
    ArticleComponent,
  ],
  imports: [
    CommonModule,
    ArticleRoutingModule,

    // Directive
    LazyImgModule,
    LoadingDirectiveModule,

    RightListModule,
    ArticleDetailModule,
    ArticleCategoryModule,

    LayoutModule,
    ComponentModule,

    ArticleRoutingModule
  ],
  exports: [
    ArticleComponent
  ]
})
export class ArticleModule { }
