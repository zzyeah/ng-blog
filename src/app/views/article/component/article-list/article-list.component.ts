import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { articleListBean, articleListDataBean } from 'src/app/bean/article/list.bean';
import { BlogService } from 'src/app/service/blog.service';

export class routeInfo {
  public page: number;
  public limit: number;
  public categoryId: number;
}

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.less']
})
export class ArticleListComponent implements OnInit {
  private _data: articleListBean[];

  constructor(
    private articleService: BlogService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  public get data() {
    return this._data;
  }

  public set data(val) {
    console.log(val);
    this._data = val;
  }

  ngOnInit(): void {
    this.articleService.getArticleListData(this.routeInfo).subscribe((r) => {
      this.data = r.rows;
      console.log(this.routeInfo);
    })
  }

  public get routeInfo(): routeInfo {
    const { page = 1, limit = 10 } = this.route.snapshot.queryParams
    const { categoryId = -1 } = this.route.snapshot.params
    return {
      page: +page,
      limit: +limit,
      categoryId: +categoryId
    }
  }

}
