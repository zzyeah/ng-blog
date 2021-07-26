import { Component, Input, OnInit } from '@angular/core';
import { HomeService } from 'src/app/service/home.service';




@Component({
  selector: 'app-image-loader',
  templateUrl: './image-loader.component.html',
  styleUrls: ['./image-loader.component.less']
})
export class ImageLoaderComponent implements OnInit {
  @Input() src: string;
  @Input() placeholder: string;
  @Input() duration: number = 5000;
  public loading: boolean;
  public opacityOrigin: number = 0;
  public allDone: boolean = false;

  constructor(
    private homeSevice: HomeService
  ) { }

  ngOnInit(): void {
  }

  handleLoading() {
    this.opacityOrigin = 1;
    setTimeout(() => {
      this.homeSevice.loading = false;
      if(this.homeSevice.allDone) this.allDone = true
    }, this.duration);
  }


}
