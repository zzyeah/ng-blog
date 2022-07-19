import { articleListBean } from "./list.bean";
import { tocCon } from "./toc.bean";

export class articleDetailBean extends articleListBean {
  public htmlContent: string;
  public toc: tocCon[];
}

export class articleDetailData{
  public code: number;
  public msg: string;
  public data: articleDetailBean
}
