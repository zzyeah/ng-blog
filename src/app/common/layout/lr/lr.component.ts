import { Component, Input, OnInit } from '@angular/core';
import { layoutSizeBean } from 'app/bean/layout/layout.bean';

@Component({
  selector: 'app-lr',
  templateUrl: './lr.component.html',
  styleUrls: ['./lr.component.less']
})
export class LrComponent implements OnInit {
  @Input() leftSize: layoutSizeBean;
  @Input() rightSize: layoutSizeBean;

  constructor() { }

  ngOnInit(): void {
  }

}
