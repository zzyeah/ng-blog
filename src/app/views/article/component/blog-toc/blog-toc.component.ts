import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { tocCon } from '../../../../bean/article/toc.bean';

@Component({
  selector: 'blog-TOC',
  templateUrl: './blog-toc.component.html',
  styleUrls: ['./blog-toc.component.less']
})
export class BlogTOCComponent implements OnInit {
  @Input() toc: tocCon[];

  protected anchorMap: Map<string, HTMLElement | null> = new Map();
  protected _curId: number | string;

  public get curId() {
    return this._curId;
  }

  public set curId(id: number | string) {
    this._curId = id;
  }

  constructor(
    protected route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.initAnchorMap(this.toc);
  }


  initAnchorMap(tocs: tocCon[]) {
    tocs.forEach(toc => {
      this.anchorMap.set(toc.anchor, document.querySelector(`#${toc.anchor}`))
      if (toc.children)
        this.initAnchorMap(toc.children);
    })
  }

  public handleSelect(target: tocCon) {
    const key = target.anchor;
    this.curId = target.isSelect;
    if (this.existAnchorValue(key)) {
      location.hash = key;
    }
  }

  existAnchorValue(key: string): boolean {
    return this.anchorMap.has(key);
  }

  getAnchorValue(key: string): HTMLElement {
    return this.anchorMap.get(key)!;
  }
}
