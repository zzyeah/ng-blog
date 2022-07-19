import { NgModule } from "@angular/core";
import { LoadingDirective } from "./loading.directive";

@NgModule({
  declarations: [LoadingDirective],
  exports: [LoadingDirective],
})
export class LoadingDirectiveModule { }
