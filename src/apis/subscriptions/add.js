import { request } from '@/utils';

export default (data) => request({
  url: 'subscriptions/add',
  method: 'POST',
  data,
});
