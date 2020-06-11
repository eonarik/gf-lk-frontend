export default (state, payload = {}) => {
  state.user = {
    ...state.user,
    ...payload,
  };
};
