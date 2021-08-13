export class commentsList {
    public code: number;
    public msg: string;
    public data: commentsData;
}

export class commentsData {
    public rows: comment[];
    public total: number;
    public code?: number;
    public msg?: string;
}

export class comment {
    public avatar: string;
    public content: string;
    public createDate: string;
    public id: string;
    public nickname: string;
}