import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.less']
})
export class AvatarComponent implements OnInit {
  @Input() url: string = 'http://mdrs.yuanjin.tech/FgMwAPYq17So9nwVH44ltDHo7u3c';
  @Input() size: number;

  constructor() { }

  ngOnInit(): void {
  }

}
