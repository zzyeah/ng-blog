import { Component, Input, OnInit } from '@angular/core';
import { HomeService } from 'app/service/home.service';

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

  constructor(
    protected homeSevice: HomeService
  ) { }

  ngOnInit(): void {
  }

  get allDone(){
    return this.homeSevice.allDone;
  }

  handleLoading() {
    this.opacityOrigin = 1;
  }

}
