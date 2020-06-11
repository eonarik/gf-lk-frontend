import { request } from '@/utils';

export default (data) => request({
  url: 'user/forgot',
  method: 'POST',
  data,
});

// export default () => new Promise((resolve) => {
//   setTimeout(() => {
//     resolve({
//       success: true,
//     });
//   }, 1000);
// });
