import { EventEmitter, Input } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';
import { BlogService } from 'src/app/service/blog.service';

@Component({
  selector: 'message-area',
  templateUrl: './message-area.component.html',
  styleUrls: ['./message-area.component.less']
})
export class MessageAreaComponent implements OnInit {
  @Input() isLoading: boolean = false;
  @Output() submit: EventEmitter<any> = new EventEmitter();
  public list: [] = []

  constructor(
    private blogService: BlogService
  ) { }

  ngOnInit(): void {
    this.blogService.getComments(1).subscribe(r=>{
      console.log(r); 
    })
  }



}
