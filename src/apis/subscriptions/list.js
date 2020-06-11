import { request } from '@/utils';

export default (data) => request({
  url: 'subscriptions/list',
  method: 'GET',
  data,
});
