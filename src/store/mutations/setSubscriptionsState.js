export default (state, payload = {}) => {
  state.subscriptions = {
    ...state.subscriptions,
    ...payload,
  };
};
