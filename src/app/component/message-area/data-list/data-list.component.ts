import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { comment } from 'app/bean/article/comment.bean';

@Component({
  selector: 'data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.less']
})
export class DataListComponent implements OnInit, OnChanges {
  @Input() list: comment[];

  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(): void {
  }
}
