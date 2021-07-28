import { Component, OnInit } from '@angular/core';
import { layoutSizeBean } from 'src/app/bean/layout/layout.bean';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.less']
})
export class TopComponent implements OnInit {
  public leftSize: layoutSizeBean = {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    paddingLeft:'6rem'
  }
  public rightSize: layoutSizeBean = {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingRight: '4rem'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
