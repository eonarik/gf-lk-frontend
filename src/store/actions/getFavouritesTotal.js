import { total } from '@/apis/favourites';

export default ({ commit }, {
  silent,
} = {}) => {
  !silent && commit('setLoading', true);

  return total().then((result) => {
    const {
      success,
      message,
      // eslint-disable-next-line no-shadow
      object: total,
    } = result;

    !silent && commit('setLoading', false);
    if (success) {
      commit('setFavouritesState', {
        total,
      });
    } else {
      throw new Error(message);
    }
  });
};
