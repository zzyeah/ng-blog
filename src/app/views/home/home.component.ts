import { Component, ElementRef, OnInit, SimpleChange, ViewChild } from '@angular/core';
import { HomeService } from 'src/app/service/home.service';

export interface data {
  midImg: string,
  bigImg: string,
  title: string,
  description: string,
}

const data: data[] = [
  {
    midImg: "http://mdrs.yuanjin.tech/img/20201031141507.jpg",
    bigImg: "http://mdrs.yuanjin.tech/img/20201031141350.jpg",
    title: "凛冬将至",
    description: "人唯有恐惧的时候方能勇敢",
  },
  {
    midImg: "http://mdrs.yuanjin.tech/img/20201031205550.jpg",
    bigImg: "http://mdrs.yuanjin.tech/img/20201031205551.jpg",
    title: "血火同源",
    description: "如果我回头，一切都完了",
  },
  {
    midImg: "http://mdrs.yuanjin.tech/img/20201031204401.jpg",
    bigImg: "http://mdrs.yuanjin.tech/img/20201031204403.jpg",
    title: "听我怒吼",
    description: "兰尼斯特有债必偿",
  },
]

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  @ViewChild('carousel', { static: true }) protected carousel: ElementRef;

  public data: data[];
  public topVal: string;
  public maxIndex = data.length;
  public page: number = 0;
  public upShow: boolean;
  public downShow: boolean;
  private height: number;

  constructor(
    private homeService: HomeService,
  ) { }

  ngOnInit(): void {
    this.init();
  }

  init() {
    this.data = data;
    this.height = this.carousel.nativeElement.offsetHeight;
  }

  handleClickUp() {
    if (this.homeService.page <= 0) return;
    this.move({ direct: 'up' });
  }

  handleClickDown() {
    if (this.homeService.page >= this.maxIndex - 1) return;
    this.move({ direct: 'down' });
  }



  handleWheel(el: any) {
    if (el.deltaY > 124 && (this.homeService.page < this.maxIndex - 1)) {
      this.move({ direct: 'down' });
    } else if (el.deltaY < -124 && (this.homeService.page > 0)) {
      this.move({ direct: 'up' });
    }
  }

  handleClick(index: number) {
    this.move({ index: index })
  }

  move(options: {
    direct?: string,
    index?: number
  }) {
    if (options.direct === "up") {
      this.homeService.page--;
    } else if (options.direct === "down") {
      this.homeService.page++;
    }
    if (options.index) {
      this.homeService.page = options.index - 1;
      this.switchTo(this.homeService.page);
    }
    this.page = this.homeService.page;
    this.switchTo(this.homeService.page);
  }

  switchTo(index: number) {
    this.topVal = `${-this.height * index}px`;
  }
}
