import { logout } from '@/apis/user';

export default ({ commit }, {
  silent,
} = {}) => {
  !silent && commit('setLoading', true);

  return logout().then(() => {
    window.localStorage.removeItem('token');

    !silent && commit('setLoading', false);
    commit('setIsAuth', false);
  });
};
