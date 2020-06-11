import { list } from '@/apis/subscriptions';

export default ({ commit }, {
  month = new Date().getMonth(),
  year = new Date().getFullYear(),
  silent,
} = {}) => {
  !silent && commit('setLoading', true);

  return list({
    date: new Date(year, month, 1).toISOString(),
  }).then((result) => {
    const {
      success,
      message,
      object: items,
    } = result;

    !silent && commit('setLoading', false);
    if (success) {
      commit('setSubscriptionsState', {
        currentMonth: month,
        items,
      });
    } else {
      throw new Error(message);
    }
  });
};
