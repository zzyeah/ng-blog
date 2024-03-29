import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { articleCategoryBean } from 'app/bean/article/category.bean';
import { articleListBean } from 'app/bean/article/list.bean';
import { layoutSizeBean } from 'app/bean/layout/layout.bean';
import { BlogService } from 'app/service/blog.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.less']
})
export class ArticleComponent implements OnInit {
  public leftSize: layoutSizeBean = {
    flex: '1 0 80%'
  }
  public rightSize: layoutSizeBean = {
    flex: '0 0 19rem'
  }

  constructor(
    protected route: ActivatedRoute,
    protected articleService: BlogService,
  ) { }

  ngOnInit(): void {
  }

}
