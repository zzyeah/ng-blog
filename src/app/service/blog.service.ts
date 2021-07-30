import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { articleCategoryBean, articleCategoryData } from '../bean/article/category.bean';
import { articleListData, articleListDataBean } from '../bean/article/list.bean';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  getArticleTypeData(): Observable<articleCategoryBean[]> {
    return this.http.get<articleCategoryData[]>('api/articleTypeData').pipe(
      map(r => r[0].data.data)
    )
  }

  getTypeById(page = 1, limit = 10, categoryid = -1): Observable<any> {
    return this.http.get('api/articleTypeData', {
      params: {
        page,
        limit,
        categoryid
      }
    })
  }

  getArticleListData(): Observable<articleListDataBean> {
    return this.http.get<articleListData[]>('api/articleListData').pipe(
      map(r => r[0].data)
    );
  }



  constructor(private http: HttpClient) { }
}
