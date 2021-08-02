import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './common/layout/layout.module';
import { ComponentModule } from './component/component.module';
import { ViewsModule } from './views/views.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { ApiService } from './api/api.service';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    ComponentModule,
    ViewsModule,
    HttpClientModule,
    // HttpClientInMemoryWebApiModule.forRoot(
    //   ApiService, { dataEncapsulation: false }
    // ),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
