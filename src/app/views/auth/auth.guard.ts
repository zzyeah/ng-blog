import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'app/bean/store/app.state';
import { AuthService } from 'app/service/auth.service';
import { setRedirectUrl } from 'app/store/auth/auth.actions';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  public auth$ = this.store.select('auth');

  constructor(private authService: AuthService, private router: Router, protected store: Store<AppState>) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> {
    const url: string = state.url;
    return this.checkLogin(url);
  }

  checkLogin(url: string) {
    return this.auth$.pipe(
      map(({ authStatus }) => {
        if (authStatus) return true;
        this.store.dispatch(setRedirectUrl({ redirectUrl: url }))
        return this.router.parseUrl('/login');
      })
    )
  }

}
