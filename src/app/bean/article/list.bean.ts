export class articleListData{
    public code: number;
    public msg: string;
    public data: articleListDataBean
}

export class articleListDataBean{
    public rows: articleListBean[];
    public total: number;
}

export class articleListBean {
    public category: {
        id: number,
        name: string,
    };
    public commentNumber: number;
    public createDate: string;
    public description: string;
    public id: string;
    public scanNumber: number;
    public thumb: string | null;
    public title: string;
}