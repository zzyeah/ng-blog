import { EventEmitter, Input } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';
import { comment } from 'src/app/bean/article/comment.bean';
import { BlogService } from 'src/app/service/blog.service';

@Component({
  selector: 'message-area',
  templateUrl: './message-area.component.html',
  styleUrls: ['./message-area.component.less']
})
export class MessageAreaComponent {
  @Input() isLoading: boolean = false;
  @Input() list: [];
  @Input() title: string;
  @Input() subTitle: number;
  @Output() submit: EventEmitter<any> = new EventEmitter();

  constructor() { }

}
