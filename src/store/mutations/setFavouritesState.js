export default (state, payload = {}) => {
  state.favourites = {
    ...state.favourites,
    ...payload,
  };
};
