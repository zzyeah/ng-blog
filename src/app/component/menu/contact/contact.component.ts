import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';


interface data {
  type: string,
  name: string,
  href: string,
  id?: number | string,
}

const content: data[] = [
  {
    type: "github",
    name: "zzyeah",
    id: 5417,
    href: "https://github.com/zzyeah/",
  },
  {
    type: "mail",
    name: "541767316@qq.com",
    id: 7595,
    href: "mailto:541767316@qq.com",
  },
  {
    type: "qq",
    name: "541767316",
    id: "316",
    href:
      "tencent://message/?Menu=yes&uin=541767316&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45",
  },
  {
    type: "weixin",
    name: "我也不知道",
    id: 558,
    href: '#'
  },
]

@Component({
  selector: 'app-contact',
  template: `
  <div class="contact-container">
    <div class="content center" *ngFor="let c of content">
      <a [href]="c.href" class="center">
          <app-icon [iconName] = "c.type" class="c-icon"></app-icon>
          <div class="c-name flex-1">{{c.name}}</div>
      </a>
    </div>
  </div>`,
  styleUrls: ['./contact.component.less']
})


export class ContactComponent implements OnInit {
  public content = content;

  constructor() { }

  ngOnInit(): void {
    
  }

}
