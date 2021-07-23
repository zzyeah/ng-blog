import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'loading',
  template: `<img src="../../../assets/img/loading.svg" alt="" class="loading-container">`,
  styleUrls: ['./loading.component.less']
})
export class LoadingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
