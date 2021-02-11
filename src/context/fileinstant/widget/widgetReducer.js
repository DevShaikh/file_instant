// eslint-disable-next-line
export default (state, action) => {
  return {
    ...state,
    [action.field]: action.value,
  };
};
