import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { layoutSizeBean } from 'app/bean/layout/layout.bean';
import { AppState } from 'app/bean/store/app.state';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.less']
})
export class TopComponent implements OnInit {
  public leftSize: layoutSizeBean = {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    paddingLeft:'6rem'
  }
  public rightSize: layoutSizeBean = {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingRight: '4rem'
  }
  public isShowLogin: boolean;

  constructor(
    protected store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store.select('auth').subscribe(authInfo=>{
      this.isShowLogin = !authInfo.authStatus;
      console.log(this.isShowLogin)
    })
  }

}
