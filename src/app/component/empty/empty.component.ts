import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-empty',
  templateUrl: './empty.component.html',
  styleUrls: ['./empty.component.less']
})
export class EmptyComponent implements OnInit {
  @Input() text: string = 'no date'
  @Input() contentStyle: { [style: string]: string } = { 'fontSize': '2rem' }

  constructor() { }

  ngOnInit(): void {
  }

}
