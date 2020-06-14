import { request } from '@/utils';

export default () => request({
  url: 'favourites/total',
  method: 'GET',
});
