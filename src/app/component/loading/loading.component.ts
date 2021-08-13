import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'loading',
  template: `<img [src]="url" alt="" class="loading-container">`,
  styleUrls: ['./loading.component.less']
})
export class LoadingComponent implements OnInit {
  public url = "assets/img/loading.svg"
  constructor() { }

  ngOnInit(): void {
  }

}
