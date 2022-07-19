import { rightList } from "./right-list.bean";

// {name:"xxx", isSelect:true, children:[ {name:"yyy", isSelect:false} ] }
export class tocCon extends rightList<tocCon> {
  public anchor: string;
}
