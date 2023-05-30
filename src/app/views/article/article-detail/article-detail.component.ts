import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { articleDetailBean } from 'app/bean/article/detail.bean';
import { tocCon } from 'app/bean/article/toc.bean';
import { layoutSizeBean } from '../../../bean/layout/layout.bean';
import { BlogService } from '../../../service/blog.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.less']
})
export class ArticleDetailComponent implements OnInit {
  public _blog: articleDetailBean;
  public isLoading: boolean = true;
  public commentList: [];
  public leftSize: layoutSizeBean = {
    'flex': '0 0 77%'
  }

  constructor(
    protected blogService: BlogService,
    protected route: ActivatedRoute,
    protected router: Router,
  ) { }

  public get blog() {
    return this._blog;
  }

  ngOnInit(): void {
    this.dataInit();
  }

  dataInit() {
    const { id } = this.route.snapshot.params;
    this.blogService.getBlogById(id).subscribe(r => {
      this.isLoading = false;
      this.handleBlogData(r.data.toc);
      this._blog = r.data
    });
  }

  protected handleBlogData(detail: tocCon[], isChild?: number) {
    detail.forEach((toc, i) => {
      toc.isSelect = isChild ? `${isChild}-${i + 1}` : i + 1;
      if (toc.children)
        this.handleBlogData(toc.children, i + 1)
    })
  }

}
