import { request } from '@/utils';

export default () => request({
  url: 'user/me',
  method: 'GET',
});

// import user from '../user.mock';

// export default () => new Promise((resolve) => {
//   setTimeout(() => {
//     resolve({
//       success: true,
//       object: {
//         ...user,
//       },
//     });
//   }, 1000);
// });
