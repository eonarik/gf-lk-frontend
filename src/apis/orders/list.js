import { request } from '@/utils';

export default (data) => request({
  url: 'orders/list',
  method: 'GET',
  data: {
    ...data,
    limit: 0,
  },
});
