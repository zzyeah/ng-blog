import {
  Component,
  ElementRef,
  Input,
  OnInit,
  HostBinding,
  ViewChild
} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { data } from '../home.component';

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

  @Input() data: data;

  titleStart = true;
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
