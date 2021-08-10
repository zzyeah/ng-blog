import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { layoutSizeBean } from 'src/app/bean/layout/layout.bean';
import { BlogService } from 'src/app/service/blog.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.less']
})
export class ArticleDetailComponent implements OnInit {
  public _blog: [] = [];
  public leftSize:layoutSizeBean = {
    'flex': '0 0 77%'
  }

  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  public get blog() {
    return this._blog;
  }

  ngOnInit(): void {
    this.dataInit();
  }

  dataInit() {
    const { id } = this.route.snapshot.params;
    console.log(id);
    this.blogService.getBlogById(id).subscribe(r => {
      this._blog = r.data
      console.log(r.data);
    });

  }

}
