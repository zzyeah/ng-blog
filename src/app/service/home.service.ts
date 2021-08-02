import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { homeImgDataBean, ImgDataArray } from '../bean/home/homeImg.bean';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private _loading: boolean = false;
  private _allDone: boolean = false;
  public page: number = 0;

  constructor(private http: HttpClient) { }

  get loading() {
    return this._loading;
  }

  set loading(val: boolean) {
    this._loading = val;
  }

  get allDone() {
    if (!this.loading) this._allDone = true;
    if (this.loading) this._allDone = false;
    return this._allDone;
  }

  getData(): Observable<homeImgDataBean[]> {
    return this.http.get<ImgDataArray>('api/banner').pipe(
      map(r=>{
        return r.data;
      }),
      catchError(this.handleError<homeImgDataBean[]>('getData', []))
    )
  }

  private log(message: string) {
    console.log(message);
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
