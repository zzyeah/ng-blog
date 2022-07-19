import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SafePipe } from './pipe/safe.pipe';
import { AboutComponent } from './views/about/about.component';
import { ArticleDetailComponent } from './views/article/article-detail/article-detail.component';
import { ArticleComponent } from './views/article/article.component';
import { HomeComponent } from './views/home/home.component';
import { MessageComponent } from './views/message/message.component';
import { ProjectComponent } from './views/project/project.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'article', component: ArticleComponent },
  { path: 'article/cate/:categoryId', component: ArticleComponent },
  { path: 'detail/:id', component: ArticleDetailComponent },
  { path: 'project', component: ProjectComponent },
  { path: 'about', component: AboutComponent },
  { path: 'message', component: MessageComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
