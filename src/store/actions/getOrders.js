import { list } from '@/apis/orders';

export default ({ commit }, {
  silent,
} = {}) => {
  !silent && commit('setLoading', true);

  return list().then((result) => {
    const {
      success,
      message,
      page,
      total,
      object: items,
    } = result;

    !silent && commit('setLoading', false);
    if (success) {
      commit('setOrdersState', {
        page,
        total,
        items,
      });
    } else {
      throw new Error(message);
    }
  });
};
