import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { merge, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { articleCategoryBean, articleCategoryData } from '../bean/article/category.bean';
import { articleListData, articleListDataBean } from '../bean/article/list.bean';
import { routeInfo } from '../views/article/component/article-list/article-list.component';

@Injectable({
  providedIn: 'root'
})
export class BlogService implements OnInit {
  private _loading = true;
  private _dataLength: number;
  private _category: articleCategoryBean[] | undefined;

  ngOnInit() {
    this.getDataObservable()
  }

  getArticleTypeData(): Observable<articleCategoryBean[]> {
    return this.http.get<articleCategoryData>('api/blogtype').pipe(
      map(r => {
        return r.data
      })
    )
  }

  getBlogById(page = 1, limit = 10, articleId = -1): Observable<any> {
    return this.http.get(`api/blog/${articleId}`, {
      params: {
        page,
        limit,
      }
    }).pipe(
      tap(() => console.log(`find blog ${articleId}`))
    )
  }

  getArticleListData(options: routeInfo): Observable<articleListDataBean> {
    return this.http.get<articleListData>(`api/blog`).pipe(
      map(r => {
        this.loading = true;
        return r.data
      })
    );
  }

  getDataObservable() {
    merge([this.getArticleListData]).subscribe(() => {
      this.loading = false;
    })
  }


  constructor(private http: HttpClient) { }

  /**
   * get data
   */
  public get loading() {
    return this._loading;
  }

  public get dataLength() {
    return this._dataLength;
  }

  public get category() {
    if (!this._category) return undefined;
    return this._category;
  }

  /**
   * set data
   */
  public set loading(val) {
    this._loading = val;
  }

  public set dataLength(val) {
    this._dataLength = val;
  }

  public set category(val) {
    if (this._category) return;
    this._category = val
  }
}
