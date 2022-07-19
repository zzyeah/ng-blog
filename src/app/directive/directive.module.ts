import { NgModule } from "@angular/core";
import { LazyImgModule } from "./lazy-img/lazy-img.module";
import { LoadingDirectiveModule } from "./loading/loading.module";


@NgModule({
  imports:[LoadingDirectiveModule, LazyImgModule]
})
export class DirectiveModule { }
