import { register } from '../../apis/user';

export default ({ commit }, {
  email,
  fullname,
  mobilephone,
  password,
  confirmpassword,
  silent,
} = {}) => {
  !silent && commit('setLoading', true);

  return register({
    email,
    fullname,
    mobilephone,
    password,
    confirmpassword,
  }).then((result) => {
    const { success, message, object: { token, ...user } } = result;

    window.localStorage.setItem('token', token);

    !silent && commit('setLoading', false);
    if (success) {
      commit('setUser', {
        ...user,
      });
      commit('setIsAuth', true);
    } else {
      throw new Error(message);
    }
  });
};
