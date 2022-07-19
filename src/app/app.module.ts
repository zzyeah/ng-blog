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
import { SafePipe } from './pipe/safe.pipe';

@NgModule({
  declarations: [
    PageNotFoundComponent,
    DatePipePipe,
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentModule,
    LayoutModule,
    ViewsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
