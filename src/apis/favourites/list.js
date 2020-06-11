import { request } from '@/utils';

export default (data) => request({
  url: 'favourites/list',
  method: 'GET',
  data: {
    ...data,
    limit: 0,
  },
});

// import product from '../product.mock';

// export default () => new Promise((resolve) => {
//   setTimeout(() => {
//     resolve({
//       success: true,
//       page: 1,
//       limit: 0,
//       total: 5,
//       object: [
//         {
//           ...product,
//           id: 1,
//         },
//         {
//           ...product,
//           id: 2,
//         },
//         {
//           ...product,
//           id: 3,
//         },
//         {
//           ...product,
//           id: 4,
//         },
//         {
//           ...product,
//           id: 5,
//         },
//       ],
//     });
//   }, 1000);
// });
