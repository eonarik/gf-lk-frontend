import { request } from '@/utils';

export default (data) => request({
  url: 'user/update',
  method: 'POST',
  data,
});

// import user from '../user.mock';

// export default (data) => new Promise((resolve) => {
//   setTimeout(() => {
//     resolve({
//       success: true,
//       object: {
//         ...user,
//         ...data,
//       },
//     });
//   }, 1000);
// });
