import { Component, OnInit } from '@angular/core';
import { layoutSizeBean } from 'src/app/bean/layout/layout.bean';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.less']
})
export class ArticleComponent implements OnInit {
  public leftSize: layoutSizeBean = {
    flex: '1 0 auto'
  }
  public rightSize: layoutSizeBean = {
    flex: '0 0 19rem'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
