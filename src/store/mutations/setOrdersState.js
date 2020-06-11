export default (state, payload = {}) => {
  state.orders = {
    ...state.orders,
    ...payload,
  };
};
