import { request } from '@/utils';

export default (id) => request({
  url: 'favourites/remove',
  method: 'GET',
  data: { id },
});

// export default () => new Promise((resolve) => {
//   setTimeout(() => {
//     resolve({
//       success: true,
//     });
//   }, 1000);
// });
