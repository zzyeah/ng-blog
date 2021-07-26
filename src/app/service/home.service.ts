import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private _loading: boolean = false;
  private _allDone: boolean = false;
  public page: number = 0;

  constructor() { }

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
}
