import { rightList } from "./right-list.bean";

export class articleCategoryBean extends rightList<articleCategoryBean> {
  public articleCount: number;
  public id: number;
  public order: number;
  public aside?: string;
}

export class articleCategoryData {
  public code: number;
  public msg: string;
  public data: articleCategoryBean[]
}
