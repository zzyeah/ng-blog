// import { Injectable } from '@angular/core';
// import { InMemoryDbService } from 'angular-in-memory-web-api';
// import { mock } from 'mockjs';
// import { homeImgDataBean } from '../bean/home/homeImg.bean';
// import * as qs from 'querystring'

// @Injectable({
//   providedIn: 'root'
// })
// export class ApiService implements InMemoryDbService {
//   createDb() {
//     const homeData: homeImgDataBean[] = [
//       {
//         midImg: "http://mdrs.yuanjin.tech/img/20201031141507.jpg",
//         bigImg: "http://mdrs.yuanjin.tech/img/20201031141350.jpg",
//         title: "凛冬将至",
//         description: "人唯有恐惧的时候方能勇敢",
//         id: 1,
//       },
//       {
//         midImg: "http://mdrs.yuanjin.tech/img/20201031205550.jpg",
//         bigImg: "http://mdrs.yuanjin.tech/img/20201031205551.jpg",
//         title: "血火同源",
//         description: "如果我回头，一切都完了",
//         id: 2,
//       },
//       {
//         midImg: "http://mdrs.yuanjin.tech/img/20201031204401.jpg",
//         bigImg: "http://mdrs.yuanjin.tech/img/20201031204403.jpg",
//         title: "听我怒吼",
//         description: "兰尼斯特有债必偿",
//         id: 3,
//       },
//     ];

//     const articleTypeData = [
//       mock({
//         code: 0,
//         msg: '',
//         data: {
//           "data|10-20": [
//             {
//               'id|+1': 1,
//               name: '分类@id',
//               "articleCount|0-300": 0,
//               'order|+1': 1,
//             }
//           ]
//         }
//       })
//     ];

//     const articleListData = [
//       mock(function (options: { url: string; }) {
//         const query = qs.parse(options.url);
//         return mock({
//           code: 0,
//           msg: '',
//           data: {
//             "total|2000-3000": 0,
//             [`rows|${query.limit || 10}`]: [{
//               id: "@guid",
//               title: "@ctitle(1,50)",
//               description: "描述@cparagraph(1,10)",
//               category: {
//                 'id|1-10': 0,
//                 name: "分类@id"
//               },
//               'scanNumber|0-3000': 0,
//               'commentNumber|0-300': 0,
//               'thumb|1': [
//                 "@image(300x250, @color, #fff, @natural)",
//                 null,
//               ],
//               createDate: `@date('T')`
//             }],
//           },
//         })
//       })
//     ]

//     return { homeData, category: articleTypeData, blog: articleListData }
//   }
//   constructor() { }
// }
