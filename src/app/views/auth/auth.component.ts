import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { AppState } from 'app/bean/store/app.state';
import { AuthService } from 'app/service/auth.service';
import { login, logout } from 'app/store/auth/auth.actions';
import { selectAuthInfo } from 'app/store/auth/auth.selectors';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.less']
})
export class AuthComponent implements OnInit, OnDestroy {
  public authForm = new FormGroup({
    userName: new FormControl(null),
    passWord: new FormControl(null)
  }, { validators: Validators.required });
  public auth$ = this.store.select(selectAuthInfo);
  public isShowInputs: boolean; // authStatus false => 显示(true)
  protected handleSubmit: Subscription;
  protected handleInit: Subscription;

  constructor(
    protected authService: AuthService,
    protected store: Store<AppState>,
    protected router: Router
  ) { }

  ngOnInit(): void {
    this.init();
  }

  ngOnDestroy(): void {
    this.handleInit.unsubscribe();
  }

  public init(){
    this.handleInit = this.auth$.pipe().subscribe((authInfo)=>{
      this.isShowInputs = !authInfo.authStatus;
    })
  }

  public submitUser(id: 'login' | 'logout') {
    this.handleSubmit = this.auth$.subscribe(authInfo => {
      if (this.handleSubmit) this.handleSubmit.unsubscribe()
      if (!authInfo.authStatus && id === 'login') {
        const { userName, passWord } = this.authForm.value
        this.authService.checkUser(userName, passWord).subscribe({
          next: (result) => {
            if (!result) return;
            this.login(result)
            this.resetFormGroupValue();
          },
          error: (err) => console.log(err),
          complete: () => {
            this.router.navigateByUrl(authInfo.redirectUrl!)
          }
        })
      }
      if (authInfo.authStatus && id === 'logout') {
        this.logout();
        this.resetFormGroupValue();
      }
    })
  }

  public login(result: {
    userName: string;
    passWord: string;
  } | undefined) {
    if (!result) return;
    this.store.dispatch(login(result))
  }

  public logout() {
    this.store.dispatch(logout());
  }

  protected resetFormGroupValue() {
    this.authForm.setValue({ userName: '', passWord: '' });
  }

}
