import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { articleCategoryBean } from 'src/app/bean/article/category.bean';
import { BlogService } from 'src/app/service/blog.service';

@Component({
  selector: 'app-right-list',
  templateUrl: './right-list.component.html',
  styleUrls: ['./right-list.component.less']
})
export class RightListComponent implements OnInit {
  @Input() list: articleCategoryBean[];
  public lists: articleCategoryBean[];
  @Output() select: EventEmitter<any> = new EventEmitter()
  private _id: number | string | null;

  constructor(private articleService: BlogService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    console.log(this.list);
    
  }

  public get categoryId() {
    this._id = this.route.snapshot.paramMap.get('categoryId');
    if (this._id) {
      return +this._id;
    }
    return -1;
  }

  handleClick(item: articleCategoryBean) {
    console.log(item);

    if (item.isSelect !== this._id) {
      this.select.emit(item);
    }
    return;
  }

}
