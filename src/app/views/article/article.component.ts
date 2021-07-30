import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { articleCategoryBean } from 'src/app/bean/article/category.bean';
import { articleListBean } from 'src/app/bean/article/list.bean';
import { layoutSizeBean } from 'src/app/bean/layout/layout.bean';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.less']
})
export class ArticleComponent implements OnInit {
  public list: articleListBean[];
  public category: articleCategoryBean[];
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
