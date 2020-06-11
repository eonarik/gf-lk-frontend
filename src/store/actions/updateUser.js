import { update } from '@/apis/user';

export default ({ commit }, {
  email,
  fullname,
  mobilephone,
  address,
  description,
  silent,
} = {}) => {
  !silent && commit('setLoading', true);
  return update({
    email,
    fullname,
    mobilephone,
    address,
    description,
  }).then((result) => {
    const { success, message, object: user } = result;

    !silent && commit('setLoading', false);
    if (success) {
      commit('setUser', user);
    } else {
      throw new Error(message);
    }
  });
};
