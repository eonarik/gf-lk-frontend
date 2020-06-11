import moment from 'moment';
import { add } from '@/apis/subscriptions';

export default ({ commit }, {
  description,
  day,
  month,
  iam,
  recipientName,
  recipientPhone,
  deliveryAddress,
  deliveryTime,
  postcardText,
  silent,
} = {}) => {
  !silent && commit('setLoading', true);

  return add({
    description,
    date: moment().set({ date: day, month }).format('DD.MM'),
    iam,
    recipient_name: recipientName,
    recipient_phone: recipientPhone,
    delivery_address: deliveryAddress,
    delivery_time: deliveryTime,
    postcardText,
  }).then((result) => {
    const { success, message } = result;

    !silent && commit('setLoading', false);
    if (!success) {
      throw new Error(message);
    }
  });
};
