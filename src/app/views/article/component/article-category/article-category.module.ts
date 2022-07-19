import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LoadingDirectiveModule } from "src/app/directive/loading/loading.module";
import { RightListModule } from "../right-list/right-list.module";
import { ArticleCategoryComponent } from "./article-category.component";

@NgModule({
  declarations: [
    ArticleCategoryComponent
  ],
  exports: [
    ArticleCategoryComponent
  ],
  imports: [
    CommonModule,
    RightListModule,
    LoadingDirectiveModule
  ]
})
export class ArticleCategoryModule { }
