import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.less']
})
export class DataListComponent implements OnInit {
  @Input() list: Array<any> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
