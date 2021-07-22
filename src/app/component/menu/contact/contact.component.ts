import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';


interface data {
  type: string,
  name: string,
  href: string,
  id?: number | string,
  src?: string,
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
    src: "http://www.duyiedu.com/source/img/%E5%85%AC%E4%BC%97%E5%8F%B7%E4%BA%8C%E7%BB%B4%E7%A0%81.png"
  },
  {
    type: "weixin",
    name: "我也不知道",
    id: 558,
    href: '#',
    src: "http://www.duyiedu.com/source/img/%E5%85%AC%E4%BC%97%E5%8F%B7%E4%BA%8C%E7%BB%B4%E7%A0%81.png"
  },
]

@Component({
  selector: 'app-contact',
  template: `
  <nav class="contact-container">
    <div class="content position-relative" *ngFor="let c of content">
      <div *ngIf = c.src class="show-content position-absolute center">
        <img [src]="c.src" />
      </div>
      <a [href]="c.href" class="d-flex align-center">
          <app-icon [iconName] = "c.type" class="c-icon"></app-icon>
          <div class="c-name flex-1">{{c.name}}</div>
      </a>
    </div>
  </nav>`,
  styleUrls: ['./contact.component.less']
})


export class ContactComponent implements OnInit {
  public content = content;

  constructor() { }

  ngOnInit(): void {

  }

}
