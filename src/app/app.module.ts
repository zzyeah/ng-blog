import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './common/layout/layout.module';
import { ComponentModule } from './component/component.module';
import { ViewsModule } from './views/views.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { DatePipePipe } from './pipe/date-pipe.pipe';
import { StoreModule } from '@ngrx/store';
import { authReducer } from './store/auth/auth.reducer';
import { ArticleModule } from './views/article/article.module';

@NgModule({
  declarations: [
    PageNotFoundComponent,
    DatePipePipe,
    AppComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ auth: authReducer }),
    ComponentModule,
    LayoutModule,
    ViewsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
