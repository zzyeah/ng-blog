import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
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
  public img: string ='src/assets/img/default.gif';
  public loading: boolean = true;
  private _data: articleListDataBean;
  @ViewChild('blogContainer', { static: true }) private blogContainer: ElementRef

  constructor(
    private articleService: BlogService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  public get data() {
    return this._data;
  }

  public set data(val) {
    this._data = val;
  }

  ngOnInit(): void {
    this.subscribeRouteParams();
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

  subscribeRouteParams() {
    const query = this.route.queryParams;
    const params = this.route.params;
    combineLatest([query, params]).subscribe(() => {
      this.blogContainer.nativeElement.scrollTop = 0;
      this.loading = true;
      this.fetchData();
    })
  };


  fetchData(): void {
    this.articleService.getArticleListData(this.routeInfo).subscribe((r) => {
      this.articleService.loading = false
      this.data = r;
      this.loading = false;
    })
  }

  handlePageChange(newPage: any) {
    console.log(newPage);
    const query = {
      page: newPage,
      limit: this.routeInfo.limit,
    };
    // 跳转到 当前的分类id 当前的页容量 newPage的页码
    if (this.routeInfo.categoryId === -1) {
      // 当前没有分类
      // /blog?page=${newPage}&limit=${this.routeInfo.limit}
      this.router.navigate(['article'], {
        queryParams: {
          ...query
        }
      });
    } else {
      // /blog/cate/${this.routeInfo.categoryId}?page=${newPage}&limit=${this.routeInfo.limit}
      this.router.navigate([`article/cate/${newPage}`], {
        queryParams: {
          ...query
        },
      });
    }
  }

  handleAClick(val: any) {
    const query = {
      page: this.routeInfo.page,
      limit: this.routeInfo.limit,
    }
    this.router.navigate([`article/cate/${val}`], {
      queryParams: {
        ...query
      }
    })
  }

  handleDetailClick(id: any) {
    this.router.navigate([`detail/${id}`])
  }

}
