import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogTOCComponent } from './blog-toc.component';

describe('BlogTOCComponent', () => {
  let component: BlogTOCComponent;
  let fixture: ComponentFixture<BlogTOCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogTOCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogTOCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
