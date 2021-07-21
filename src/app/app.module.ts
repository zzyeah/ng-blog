import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ArticleComponent } from './article/article.component';
import { ArticleDetailComponent } from './article/article-detail/article-detail.component';
import { ProjectComponent } from './project/project.component';
import { AvatarComponent } from './component/avatar/avatar.component';
import { LayoutModule } from './common/layout/layout.module';
import { MenuComponent } from './component/menu/menu.component';
import { ComponentModule } from './component/component.module';
import { AboutComponent } from './about/about.component';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArticleComponent,
    ArticleDetailComponent,
    ProjectComponent,
    AboutComponent,
    MessageComponent,
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    ComponentModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
