import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { articleCategoryBean, articleCategoryData } from '../bean/article/category.bean';
import { articleListData, articleListDataBean } from '../bean/article/list.bean';
import { routeInfo } from '../views/article/component/article-list/article-list.component';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private _loading = false;
  private _dataLength: number;

  getArticleTypeData(): Observable<articleCategoryBean[]> {
    return this.http.get<articleCategoryData>('api/blogtype').pipe(
      map(r => r.data)
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
      map(r => {console.log(r);return r.data}),
      tap(()=>{console.log(options.categoryId)})
    );
  }

  constructor(private http: HttpClient) { }

  public get loading() {
    return this._loading;
  }

  public set loading(val) {
    this._loading = val;
  }

  public get dataLength() {
    return this._dataLength;
  }

  public set dataLength(val) {
    this._dataLength = val;
  }
}
