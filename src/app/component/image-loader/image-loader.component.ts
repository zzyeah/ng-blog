import { Component, Input, OnInit } from '@angular/core';




@Component({
  selector: 'app-image-loader',
  templateUrl: './image-loader.component.html',
  styleUrls: ['./image-loader.component.less']
})
export class ImageLoaderComponent implements OnInit {
  @Input() src: string;
  @Input() placeholder: string;
  @Input() loading: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
