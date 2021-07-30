import { Component, ElementRef, OnInit, SimpleChange, ViewChild } from '@angular/core';
import { Observable, of } from 'rxjs';
import { homeImgDataBean } from 'src/app/bean/home/homeImg.bean';
import { HomeService } from 'src/app/service/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  @ViewChild('carousel', { static: true }) protected carousel: ElementRef;

  public data: homeImgDataBean[];
  // public topVal: string;
  public maxIndex: number;
  public page: number = 0;
  public upShow: boolean = false;
  public downShow: boolean = true;
  private height: number;


  public get topVal() {
    return `${-this.height * this.homeService.page}px`
  }

  constructor(
    private homeService: HomeService,
  ) { }

  ngOnInit(): void {
    this.init();
  }

  init() {
    this.homeService.loading = true;
    this.homeService.getData().subscribe(
      pages => {
        this.data = pages;
        this.homeService.loading = false;
        this.maxIndex = pages.length;
        this.height = this.carousel.nativeElement.offsetHeight;
      }
    );
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
    this.move({ index: index });
  }

  move(options: {
    direct?: string,
    index?: number
  }) {
    if (!this.maxIndex) return;
    if (options.direct === "up") {
      this.homeService.page--;
    } else if (options.direct === "down") {
      this.homeService.page++;
    }
    if (options.index) {
      this.homeService.page = options.index - 1;
    }
    if (this.homeService.page <= 0) this.upShow = false;
    if (this.homeService.page > 0 && this.homeService.page < this.maxIndex) this.upShow = true;
    if (this.homeService.page >= this.maxIndex - 1) this.downShow = false;
    if (this.homeService.page < this.maxIndex - 1 && this.homeService.page >= 0) this.downShow = true;
    this.page = this.homeService.page;
  }
}
