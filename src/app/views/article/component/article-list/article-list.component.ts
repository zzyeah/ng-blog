import { Component, Input, OnInit } from '@angular/core';
import { articleListBean, articleListDataBean } from 'src/app/bean/article/list.bean';
import { BlogService } from 'src/app/service/blog.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.less']
})
export class ArticleListComponent implements OnInit {
  public data: articleListBean[];

  constructor(private articleService: BlogService) { }

  ngOnInit(): void {
    this.articleService.getArticleListData().subscribe((r) => {
      this.data = r.rows;
    })
  }

}
