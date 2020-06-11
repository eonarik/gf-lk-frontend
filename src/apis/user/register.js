import { request } from '@/utils';

export default (data) => request({
  url: 'user/register',
  method: 'POST',
  data,
});

// import user from '../user.mock';

// export default () => new Promise((resolve) => {
//   setTimeout(() => {
//     resolve({
//       success: true,
//       object: {
//         ...user,
//         token: 'ef887125095fab0b965e23233758052a',
//       },
//     });
//   }, 1000);
// });
