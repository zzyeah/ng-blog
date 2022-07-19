import { EventEmitter, Input } from '@angular/core';
import { Component, Output } from '@angular/core';

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
