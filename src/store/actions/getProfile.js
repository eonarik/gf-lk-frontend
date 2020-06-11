import { me } from '@/apis/user';

export default ({ commit }, {
  silent,
} = {}) => {
  commit('setIsAuth', true);
  !silent && commit('setLoading', true);

  return me().then((result) => {
    const { success, message, object: user } = result;

    !silent && commit('setLoading', false);
    if (success) {
      commit('setUser', {
        ...user,
      });
    } else {
      throw new Error(message);
    }
  });
};
