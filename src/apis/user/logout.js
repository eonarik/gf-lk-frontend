import { request } from '@/utils';

export default () => request({
  url: 'user/logout',
  method: 'GET',
});

// export default () => new Promise((resolve) => {
//   setTimeout(() => {
//     resolve({
//       success: true,
//     });
//   }, 1000);
// });
