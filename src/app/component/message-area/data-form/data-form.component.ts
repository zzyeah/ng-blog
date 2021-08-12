import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.less']
})
export class DataFormComponent implements OnInit {
  public isSubmiting: boolean = false;
  public formData: any = {
    nickname: "",
    content: "",
  };
  public error: any = {
    nickname: "",
    content: "",
  };

  constructor() { }

  ngOnInit(): void {
  }
  handleSubmit() { 
    this.isSubmiting = true;
    setTimeout(() => {
      this.isSubmiting = false;
    }, 1000);
  }
}
