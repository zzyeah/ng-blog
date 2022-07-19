import {
  Component,
  Input,
  OnInit,
} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { homeImgDataBean } from 'src/app/bean/home/home-img.bean';

@Component({
  selector: 'app-carousel-item',
  templateUrl: './carousel-item.component.html',
  styleUrls: ['./carousel-item.component.less'],
  animations: [
    trigger('showWords', [
      state('start', style({
        width: '0px',
        opacity: 1,
      })),
      state('end', style({
        width: '100%',
        opacity: 1,
      })),
      transition('start=>end', [
        animate('6s')
      ])
    ]),
  ],
})
export class CarouselItemComponent implements OnInit {

  @Input() data: homeImgDataBean;

  titleStart: boolean = true;
  descStart: boolean = true;

  constructor() { }

  ngOnInit(): void {
    console.log(this.data);
    this.showWords();
  }

  showWords() {
    setTimeout(() => {
      this.titleStart = false;
    }, 100);
    setTimeout(() => {
      this.descStart = false;
    }, 1100);
  }

}
