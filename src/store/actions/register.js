import { register } from '../../apis/user';

export default ({ commit }, {
  email,
  username,
  fullname,
  mobilephone,
  password,
  confirmpassword,
  silent,
} = {}) => {
  !silent && commit('setLoading', true);

  return register({
    email,
    username,
    fullname,
    mobilephone,
    password,
    confirmpassword,
  }).then((result) => {
    const {
      success,
      message,
      data,
      object: { token, ...user },
    } = result;

    commit('setErrorData', {});
    !silent && commit('setLoading', false);
    if (success) {
      window.localStorage.setItem('token', token);
      commit('setUser', {
        ...user,
      });
      commit('setIsAuth', true);
    } else {
      commit('setErrorData', data);
      throw new Error(message);
    }
  });
};
