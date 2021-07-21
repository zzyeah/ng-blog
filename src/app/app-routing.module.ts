import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ArticleDetailComponent } from './article/article-detail/article-detail.component';
import { ArticleComponent } from './article/article.component';
import { HomeComponent } from './home/home.component';
import { MessageComponent } from './message/message.component';
import { ProjectComponent } from './project/project.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'article', component: ArticleComponent },
  { path: 'detail/:id', component: ArticleDetailComponent },
  { path: 'project', component: ProjectComponent },
  { path: 'about', component: AboutComponent },
  { path: 'message', component: MessageComponent },
  { path: '**', redirectTo: '/article' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
