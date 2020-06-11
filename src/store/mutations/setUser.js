export default (state, payload = {}) => {
  state.user = {
    ...payload,
  };
};
