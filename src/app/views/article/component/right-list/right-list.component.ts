import { EventEmitter } from '@angular/core';
import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-right-list',
  templateUrl: './right-list.component.html',
  styleUrls: ['./right-list.component.less']
})
export class RightListComponent {
  @Input() list: any;
  @Input() curId: number | string;
  @Output() select: EventEmitter<any> = new EventEmitter()
  protected _childCurId: string;

  public get childCurId() {
    return this._childCurId;
  }

  public set childCurId(value: string) {
    this._childCurId = value;
   }
  handleClick(item: any) {
    this.select.emit(item);
    this.childCurId = item.isSelect;
  }

}
