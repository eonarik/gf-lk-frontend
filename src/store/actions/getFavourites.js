import { list } from '@/apis/favourites';

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
      commit('setFavouritesState', {
        page,
        total,
        items,
      });
    } else {
      commit('setFavouritesState', {
        total: 0,
        items: [],
      });
      throw new Error(message);
    }
  });
};
