import { ComponentFactoryResolver, Directive, ElementRef, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { LoadingComponent } from 'src/app/component/loading/loading.component';

@Directive({
  selector: '[loading]',
})
export class LoadingDirective {
  protected hasView = false;

  @Input() set loading(condition: boolean) {
    if (condition && !this.hasView) {
      const loading = this.componentFactoryResolver.resolveComponentFactory(LoadingComponent)
      this.viewContainer.createComponent(loading);
      this.hasView = true;
    } else if (!condition && this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }

  constructor(
    protected viewContainer: ViewContainerRef,
    protected componentFactoryResolver: ComponentFactoryResolver,
  ) { }

}
