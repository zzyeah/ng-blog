export class articleCategoryBean {
    public articleCount: number;
    public id: number;
    public name: string;
    public order: number;
    public isSelect?: boolean;
    public aside?: string;
}

export class articleCategoryData {
    public code: number;
    public msg: string;
    public data: {
        data: articleCategoryBean[]
    };
}