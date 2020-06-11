export default (state, currentMonth = 0) => {
  state.favourites = {
    ...state.favourites,
    currentMonth,
  };
};
