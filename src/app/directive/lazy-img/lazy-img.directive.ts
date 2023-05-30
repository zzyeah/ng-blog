import { Directive, ElementRef, HostListener, Input, OnDestroy, Output } from "@angular/core";
import { fromEvent, Subscription } from "rxjs";
import { debounceTime } from "rxjs/operators";
// import defaultImg from "";

@Directive({
  selector: '[lazyImg]',
})
export class LazyImgDirective implements OnDestroy {
  @Input('lazySrc') imgSrc!: string;
  @Input('scrollElement') scrollElement: Element;
  @Input('defaultSrc') defaultSrc: string;

  protected watchEvent: Subscription;

  @HostListener('load', ['$event.target'])
  loaded(img: HTMLImageElement) {
    if (!img) return;
    this.checkImgShow(img);

    if (this.scrollElement && !this.watchEvent)
      this.watchEvent = fromEvent(this.scrollElement!, 'scroll').pipe(debounceTime(50)).subscribe(() => {
        this.checkImgShow(img)
      })
    else
      if (img.src !== this.imgSrc) {
        img.src = this.imgSrc;
      }
  }

  constructor(protected elementRef: ElementRef) {
    this.elementRef.nativeElement.src = this.defaultSrc || 'assets/img/default.gif';
  }

  ngOnDestroy(): void {
    if (this.watchEvent)
      this.watchEvent.unsubscribe();
  }

  checkImgShow(img: HTMLImageElement) {
    const clientHeight = document.documentElement.clientHeight;
    const rect = this.elementRef.nativeElement.getBoundingClientRect();
    const height = rect.height || 150;
    if (rect.top >= -height && rect.top <= clientHeight) {
      // 在视口范围内
      if (img.src !== this.imgSrc) img.src = this.imgSrc;
      if (this.watchEvent) this.watchEvent.unsubscribe();
    }
  }
}
