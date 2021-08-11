import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.less']
})
export class BlogDetailComponent implements OnInit {
  @Input() blog: any;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  searchCid(cid: number) {
    this.router.navigate([`article/cate/${cid}`]);
  }

}
