import { Component, Input, OnInit } from '@angular/core';
import { data } from '../home.component';

@Component({
  selector: 'app-carousel-item',
  templateUrl: './carousel-item.component.html',
  styleUrls: ['./carousel-item.component.less']
})
export class CarouselItemComponent implements OnInit {
  @Input() data: data;

  constructor() { }

  ngOnInit(): void {
    console.log(this.data);
    
  }

}
