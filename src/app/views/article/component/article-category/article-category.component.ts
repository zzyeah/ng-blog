import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { articleCategoryBean } from 'app/bean/article/category.bean';
import { BlogService } from 'app/service/blog.service';

@Component({
  selector: 'app-article-category',
  templateUrl: './article-category.component.html',
  styleUrls: ['./article-category.component.less']
})
export class ArticleCategoryComponent implements OnInit {
  public _list: articleCategoryBean[] = [];
  public data: articleCategoryBean[];
  public loading: boolean = true;
  protected _id: number | string | null;

  constructor(
    protected router: Router,
    protected route: ActivatedRoute,
    protected articleService: BlogService,
  ) { }

  ngOnInit(): void {
    this.initData();
  }

  protected initData() {
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

  public get categoryId() {
    this._id = this.route.snapshot.paramMap.get('categoryId');
    if (this._id) {
      return +this._id;
    }
    return -1;
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

  protected get limit() {
    let limit;
    this.route.queryParams.subscribe(
      r => limit = r.limit
    )
    return limit || 10;
  }

  handleSelect(el: articleCategoryBean) {
    if (el.isSelect === this.categoryId) return;

    console.log(el)

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
