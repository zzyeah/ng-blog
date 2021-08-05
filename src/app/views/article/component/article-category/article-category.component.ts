import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { articleCategoryBean } from 'src/app/bean/article/category.bean';
import { BlogService } from 'src/app/service/blog.service';

@Component({
  selector: 'app-article-category',
  templateUrl: './article-category.component.html',
  styleUrls: ['./article-category.component.less']
})
export class ArticleCategoryComponent implements OnInit {
  public _list: articleCategoryBean[] = [];
  public data: articleCategoryBean[];
  public loading: boolean = true;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private articleService: BlogService,
  ) { }

  ngOnInit(): void {
    this.initData();
  }

  private initData() {
    this.loading = true;
    if (this.articleService.category) {
      this.data = this.articleService.category;
      this.loading = false;
      return;
    };
    this.articleService.getArticleTypeData().subscribe((response) => {
      this.articleService.category = response;
      this.articleService.dataLength = response.length;
      this.data = this.articleService.category;
      this.loading = false;
      const target = this.route.snapshot.paramMap.get('categoryId');
      if (target) {
        if (+target > this.articleService.dataLength || +target < 1 || +target % 1 !== 0) {
          this.router.navigate(['home'])
        }
      }
    })
  }

  public get list() {
    const totalArticleCount = this.data.reduce(
      (a, b) => a + b.articleCount,
      0
    );
    return this._list = [
      {
        name: '全部',
        id: -1,
        articleCount: totalArticleCount,
        order: -1,
      },
      ...this.data,
    ].map(
      (data) => ({
        ...data,
        isSelect: data.id,
        aside: `${data.articleCount}篇`
      })
    );
  }

  private get limit() {
    let limit;
    this.route.queryParams.subscribe(
      r => limit = r.limit
    )
    return limit || 10;
  }

  handleSelect(el: articleCategoryBean) {
    const query = {
      page: 1,
      limit: this.limit
    }
    if (el.id === -1) {
      this.router.navigate([`article`], {
        queryParams: {
          ...query
        }
      });
    } else {
      this.router.navigate([`article/cate/${el.id}`], {
        queryParams: {
          ...query
        },
      });
    }
  };

}
