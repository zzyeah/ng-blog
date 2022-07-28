import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArticleComponent } from './article.component';

const routes: Routes = [
  { path: '', component: ArticleComponent },
  { path: 'article/cate/:categoryId', component: ArticleComponent },
  { path: 'detail/:id', component: ArticleDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule { }
