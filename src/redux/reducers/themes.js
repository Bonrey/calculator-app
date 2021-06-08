const themesReducer = (state = 'theme1', action) => {
  if (/^theme\d$/.test(action.type)) {
    return action.type;
  }
  return state;
}

export default themesReducer;