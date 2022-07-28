import { Component } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import './mock/index'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  public title = 'ng-blog';

  constructor() {
    fromEvent(window, 'resize')
      .pipe(debounceTime(50))
      .subscribe(() => {
        // console.log('resize')
        // 媒体查询?class名转换?
      }).unsubscribe()
  }
}
