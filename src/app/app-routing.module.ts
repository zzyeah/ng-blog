import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingConstant } from './constant/app-routing.constant';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './views/about/about.component';
import { AuthComponent } from './views/auth/auth.component';
import { AuthGuard } from './views/auth/auth.guard';
import { HomeComponent } from './views/home/home.component';
import { MessageComponent } from './views/message/message.component';
import { ProjectComponent } from './views/project/project.component';


const routes: Routes = [
  { path: AppRoutingConstant.HOME_PATH, component: HomeComponent },
  { path: AppRoutingConstant.PROJECT_PATH, component: ProjectComponent, canActivate: [AuthGuard] },
  { path: AppRoutingConstant.ABOUT_PATH, component: AboutComponent },
  { path: AppRoutingConstant.MESSAGE_PATH, component: MessageComponent },
  { path: AppRoutingConstant.AUTH_PATH, loadChildren: () => import('./views/auth/auth.module').then(m => m.AuthModule) },
  { path: AppRoutingConstant.ARTICLE_PATH, loadChildren: () => import('./views/article/article.module').then(m => m.ArticleModule) },
  { path: '', redirectTo: AppRoutingConstant.HOME_PATH, pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
