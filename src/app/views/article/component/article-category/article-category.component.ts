import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { articleCategoryBean } from 'src/app/bean/article/category.bean';

@Component({
  selector: 'app-article-category',
  templateUrl: './article-category.component.html',
  styleUrls: ['./article-category.component.less']
})
export class ArticleCategoryComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

  }

  private get limit() {
    let limit;
    this.route.queryParams.subscribe(
      r => limit = r.limit
    )
    return limit || 10;
  }

  handleSelect(el: articleCategoryBean) {
    const query = {
      page: 1,
      limit: this.limit
    }
    if (el.id === -1) {
      this.router.navigate([`article`], {
        queryParams: {
          ...query
        }
      });
    } else {
      this.router.navigate([`article/cate/${el.id}`], {
        queryParams: {
          ...query
        }
      });
    }
  };

}
