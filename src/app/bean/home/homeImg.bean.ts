export class ImgDataArray{
    public code: number;
    public msg: string;
    data: homeImgDataBean[];
}

export class homeImgDataBean {
    public midImg: string;
    public bigImg: string;
    public title: string;
    public description: string;
    public id: number;
}