import { login } from '@/apis/user';

export default ({ commit }, {
  username,
  password,
  rememberme,
  silent,
} = {}) => {
  !silent && commit('setLoading', true);

  return login({
    username,
    password,
    rememberme,
  }).then((result) => {
    const { success, message, object: { token, ...user } } = result;

    !silent && commit('setLoading', false);
    if (success) {
      window.localStorage.setItem('token', token);

      commit('setUser', user);
      commit('setIsAuth', true);
    } else {
      throw new Error(message);
    }
  });
};
