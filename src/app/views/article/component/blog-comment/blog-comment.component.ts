import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/service/blog.service';

@Component({
  selector: 'blog-comment',
  templateUrl: './blog-comment.component.html',
  styleUrls: ['./blog-comment.component.less']
})
export class BlogCommentComponent implements OnInit {
  public subTitle: number = 1;
  public title: string = '评论列表';
  public list: [];
  public isLoading = false;
  constructor(
    private blogService: BlogService
  ) { }

  ngOnInit(): void {

    this.blogService.getComments(1).subscribe(r => {
      console.log(r);
      this.subTitle = r.total
      this.list = r.rows;
    })
  }

  handleSubmit() { }
}
