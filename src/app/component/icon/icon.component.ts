import { Component, Input, OnInit } from '@angular/core';



const classMap = [
  ['home', "iconzhuye"],
  ['success', "iconzhengque"],
  ['error', "iconcuowu"],
  ['close', "iconguanbi"],
  ['warn', "iconjinggao"],
  ['info', "iconxinxi"],
  ['blog', "iconblog"],
  ['code', "iconcode"],
  ['about', "iconset_about_hov"],
  ['weixin', "iconweixin"],
  ['mail', "iconemail"],
  ['github', "icongithub"],
  ['qq', "iconsign_qq"],
  ['arrowUp', "iconiconfonticonfonti2copy"],
  ['arrowDown', "iconiconfonticonfonti2"],
  ['empty', "iconempty"],
  ['chat', "iconliuyan"],
];

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.less']
})
export class IconComponent implements OnInit {
  @Input() iconName: any
  public iconClass: string
  constructor() { }
  
  initClass(): void{
    for (const item of classMap) {
      if (item[0] === this.iconName) {
        this.iconClass = item[1];
      }
    }
  }

  ngOnInit(): void {
    this.initClass();
  }
}
