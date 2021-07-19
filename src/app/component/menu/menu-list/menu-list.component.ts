import { Component, OnInit } from '@angular/core';

const items = [
  {
    path: 'home',
    icon: 'home',
    title: '主页',
  },
  {
    path: 'article',
    icon: 'blog',
    title: '文章'
  },
  {
    path: 'project',
    icon: 'code',
    title: '项目&效果'
  },
  {
    path: "about",
    title: "关于我",
    icon: "about",
    // exact: true,
  },
  {
    path: "message",
    title: "留言板",
    icon: "chat",
    // exact: true,
  },
]

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.less']
})
export class MenuListComponent implements OnInit {
  public items = items

  constructor() { }

  ngOnInit(): void {
  }

}
