import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  public loading: boolean = false;
  public page: number = 0;

  constructor() { }

  getLoading() {
    return this.loading;
  }

  setLoading(val: boolean): void {
    this.loading = val;
  }
}
