import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'blog-TOC',
  templateUrl: './blog-toc.component.html',
  styleUrls: ['./blog-toc.component.less']
})
export class BlogTOCComponent implements OnInit {
  @Input() toc: any;

  constructor() { }

  ngOnInit(): void {
  }

}
