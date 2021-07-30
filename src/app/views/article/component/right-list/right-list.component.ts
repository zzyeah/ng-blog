import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { articleCategoryBean } from 'src/app/bean/article/category.bean';
import { BlogService } from 'src/app/service/blog.service';

@Component({
  selector: 'app-right-list',
  templateUrl: './right-list.component.html',
  styleUrls: ['./right-list.component.less']
})
export class RightListComponent implements OnInit {
  private _list: articleCategoryBean[];
  private data: articleCategoryBean[];
  public _id: number;

  @Output() select: EventEmitter<any> = new EventEmitter()

  constructor(private articleService: BlogService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.initData();
  }

  public get categoryId() {
    this.route.params.subscribe(r => this.categoryId = parseInt(r.categoryId));
    return this._id || -1;
  }

  public set categoryId(val) {
    this._id = val
  }

  initData() {
    this.articleService.getArticleTypeData().subscribe(
      r => {
        this.data = r;
      }
    )
  }

  public get list() {
    const totalActicleCount = this.data.reduce(
      (a, b) => a + b.articleCount,
      0
    );
    const all: articleCategoryBean = { name: '全部', id: -1, articleCount: totalActicleCount, order: -1 }
    const result = [
      all,
      ...this.data
    ]
    this.list = result.map(it => ({
      ...it,
      isSelect: it.id === this.categoryId,
      aside: `${it.articleCount}篇`
    })
    );

    return this._list;
  }

  public set list(val) {
    this._list = val;
  }

  handleClick(item: articleCategoryBean) {
    if (!item.isSelect) {
      this.select.emit(item);
    }
    return;
  }

}
