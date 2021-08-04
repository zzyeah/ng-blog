import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.less']
})
export class PagerComponent {
  @Input() current: number = 1; // 当前页码
  @Input() total: number = 0; // 总数据量
  @Input() limit: number = 10; // 页容量
  @Input() visibleNumber: number = 10; // 可见页码数
  @Output() pageChange: EventEmitter<any> = new EventEmitter();

  constructor() { }

  // 总页数
  public get pageNumber() {
    // 向上取整
    return Math.ceil(this.total / this.limit);
  }

  // 得到显示的最小数字
  public get visibleMin() {
    let min = this.current - Math.floor(this.visibleNumber / 2);
    if (min < 1) min = 1;
    return min
  }

  public get visibleMax() {
    let max = this.visibleMin + this.visibleNumber - 1;
    if (max > this.pageNumber) {
      max = this.pageNumber;
    }
    return max;
  }

  public get numbers() {
    let nums = [];
    for (let i = this.visibleMin; i <= this.visibleMax; i++) {
      nums.push(i);
    }
    return nums;
  }

  handleClick(newPage: number) {
    if (newPage < 1) newPage = 1;
    if (newPage > this.pageNumber) newPage = this.pageNumber;
    if (newPage === this.current) return;
    this.pageChange.emit(newPage);
  }

}
